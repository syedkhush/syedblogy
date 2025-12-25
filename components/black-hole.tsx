"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export function BlackHole() {
    const containerRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const cw = container.offsetWidth
        const ch = container.offsetHeight
        const maxorbit = 255 // distance from center
        const centery = ch / 2
        const centerx = cw / 2

        const startTime = new Date().getTime()
        let currentTime = 0

        const stars: Star[] = []
        let collapse = false // if hovered
        let expanse = false // if clicked
        let returning = false // if particles are returning to orbit
        let animationFrameId: number

        // Create canvas
        const canvas = document.createElement("canvas")
        canvas.width = cw
        canvas.height = ch
        // Clear previous canvas if any
        const existingCanvas = container.querySelector("canvas")
        if (existingCanvas) {
            existingCanvas.remove()
        }
        container.appendChild(canvas)
        const context = canvas.getContext("2d")!

        context.globalCompositeOperation = "multiply"

        function setDPI(canvas: HTMLCanvasElement, dpi: number) {
            // Set up CSS size if it's not set up already
            if (!canvas.style.width) canvas.style.width = canvas.width + "px"
            if (!canvas.style.height) canvas.style.height = canvas.height + "px"

            const scaleFactor = dpi / 96
            canvas.width = Math.ceil(canvas.width * scaleFactor)
            canvas.height = Math.ceil(canvas.height * scaleFactor)
            const ctx = canvas.getContext("2d")!
            ctx.scale(scaleFactor, scaleFactor)
        }

        function rotate(cx: number, cy: number, x: number, y: number, angle: number) {
            const radians = angle
            const cos = Math.cos(radians)
            const sin = Math.sin(radians)
            const nx = cos * (x - cx) + sin * (y - cy) + cx
            const ny = cos * (y - cy) - sin * (x - cx) + cy
            return [nx, ny]
        }

        setDPI(canvas, 192)

        class Star {
            orbital: number
            x: number
            y: number
            yOrigin: number
            speed: number
            rotation: number
            startRotation: number
            id: number
            collapseBonus: number
            color: string
            hoverPos: number
            expansePos: number
            prevR: number
            prevX: number
            prevY: number
            originalY: number
            trail: number = 0

            constructor(index: number) {
                // Get a weighted random number, so that the majority of stars will form in the center of the orbit
                const rands = []
                rands.push(Math.random() * (maxorbit / 2) + 1)
                rands.push(Math.random() * (maxorbit / 2) + maxorbit)

                this.orbital = rands.reduce((p, c) => p + c, 0) / rands.length

                this.x = centerx // All of these stars are at the center x position at all times
                this.y = centery + this.orbital // Set Y position starting at the center y + the position in the orbit

                this.yOrigin = centery + this.orbital // this is used to track the particles origin

                this.speed = ((Math.floor(Math.random() * 2.5) + 1.5) * Math.PI) / 180 // The rate at which this star will orbit
                this.rotation = 0 // current Rotation
                this.startRotation = ((Math.floor(Math.random() * 360) + 1) * Math.PI) / 180 // Starting rotation

                this.id = index // This will be used when expansion takes place

                this.collapseBonus = this.orbital - maxorbit * 0.7 // This "bonus" is used to randomly place some stars outside of the blackhole on hover
                if (this.collapseBonus < 0) {
                    // if the collapse "bonus" is negative
                    this.collapseBonus = 0 // set it to 0, this way no stars will go inside the blackhole
                }

                this.color = "rgba(255,255,255," + (1 - this.orbital / 255) + ")" // Color the star white, but make it more transparent the further out it is generated

                this.hoverPos = centery + maxorbit / 2 + this.collapseBonus // Where the star will go on hover of the blackhole
                this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1) // Where the star will go when expansion takes place

                this.prevR = this.startRotation
                this.prevX = this.x
                this.prevY = this.y

                // Store original position for returning
                this.originalY = this.yOrigin
            }

            draw() {
                if (!expanse && !returning) {
                    this.rotation = this.startRotation + currentTime * this.speed
                    if (!collapse) {
                        // not hovered
                        if (this.y > this.yOrigin) {
                            this.y -= 2.5
                        }
                        if (this.y < this.yOrigin - 4) {
                            this.y += (this.yOrigin - this.y) / 10
                        }
                    } else {
                        // on hover
                        this.trail = 1
                        if (this.y > this.hoverPos) {
                            this.y -= (this.hoverPos - this.y) / -5
                        }
                        if (this.y < this.hoverPos - 4) {
                            this.y += 2.5
                        }
                    }
                } else if (expanse && !returning) {
                    this.rotation = this.startRotation + currentTime * (this.speed / 2)
                    if (this.y > this.expansePos) {
                        this.y -= Math.floor(this.expansePos - this.y) / -80 // Slower expansion for better visibility
                    }
                } else if (returning) {
                    // Returning to original orbit slowly
                    this.rotation = this.startRotation + currentTime * this.speed
                    if (Math.abs(this.y - this.originalY) > 2) {
                        this.y += (this.originalY - this.y) / 50 // Much slower return
                    } else {
                        this.y = this.originalY
                        this.yOrigin = this.originalY
                    }
                }

                context.save()
                context.fillStyle = this.color
                context.strokeStyle = this.color
                context.beginPath()
                const oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR)
                context.moveTo(oldPos[0], oldPos[1])
                context.translate(centerx, centery)
                context.rotate(this.rotation)
                context.translate(-centerx, -centery)
                context.lineTo(this.x, this.y)
                context.stroke()
                context.restore()

                this.prevR = this.rotation
                this.prevX = this.x
                this.prevY = this.y
            }
        }

        // Animation loop
        function loop() {
            const now = new Date().getTime()
            currentTime = (now - startTime) / 50

            context.fillStyle = "rgba(25,25,25,0.2)" // somewhat clear the context, this way there will be trails behind the stars
            context.fillRect(0, 0, cw, ch)

            for (let i = 0; i < stars.length; i++) {
                // For each star
                if (stars[i] !== undefined) {
                    stars[i].draw() // Draw it
                }
            }

            animationFrameId = requestAnimationFrame(loop)
        }

        function init() {
            context.fillStyle = "rgba(25,25,25,1)" // Initial clear of the canvas
            context.fillRect(0, 0, cw, ch)
            for (let i = 0; i < 2500; i++) {
                // create 2500 stars
                stars.push(new Star(i))
            }
            loop()
        }

        init()

        // Expose control to React state
        // We'll use a data attribute on the container to signal state changes if needed,
        // but the closure variables `collapse` and `expanse` are local.
        // So we need an effect to update them when React state changes.
        // However, the original code used event listeners. We can replicate that or bridge it.
        // Let's attach the logic to the component state for cleaner React integration.

        const handleResize = () => {
            // Optional: handle resize
        }

        // We attach these to the ref object so the useEffect below can access the variables
        // but since they are in closure, we can just define functions here.

        // We actually need to expose `setHover` and `setClick` logic
        // But since `loop` is running with closure variables, we need to mutate them.

        (container as any).__setCollapse = (val: boolean) => { collapse = val };
        (container as any).__setExpanse = (val: boolean) => { expanse = val };
        (container as any).__setReturning = (val: boolean) => { returning = val };

        return () => {
            cancelAnimationFrame(animationFrameId)
            if (canvas) canvas.remove()
        }
    }, []) // Empty deps, run once on mount

    // Effect to sync React state (hover/click) to canvas animation variables
    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current as any
            if (container.__setCollapse) container.__setCollapse(isHovered && !isOpen)
            if (container.__setExpanse) container.__setExpanse(isOpen)
        }
    }, [isHovered, isOpen])

    const handleClick = () => {
        setIsOpen(true)
        setTimeout(() => {
            router.push("/home")
        }, 1500) // Navigate after some expansion time
    }

    return (
        <div className="fixed inset-0 w-full h-full bg-[rgba(25,25,25,1)] overflow-hidden" ref={containerRef}>
            <div
                className={`centerHover ${isOpen ? 'open' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
                style={{
                    width: '255px',
                    height: '255px',
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginTop: '-128px',
                    marginLeft: '-128px',
                    zIndex: 2,
                    cursor: 'pointer',
                    lineHeight: '255px',
                    textAlign: 'center',
                    transition: 'all 500ms',
                    opacity: isOpen ? 0 : 1,
                    pointerEvents: isOpen ? 'none' : 'auto'
                }}
            >
                <span style={{
                    color: isHovered ? '#DDD' : '#666',
                    fontFamily: 'serif',
                    fontSize: '18px',
                    position: 'relative',
                    transition: 'all 500ms',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <span style={{
                        display: 'inline-block',
                        height: '1px',
                        width: '16px',
                        marginRight: '12px',
                        backgroundColor: isHovered ? '#DDD' : '#666',
                        transition: 'all 500ms'
                    }} />
                    ENTER
                    <span style={{
                        display: 'inline-block',
                        height: '1px',
                        width: '16px',
                        marginLeft: '12px',
                        backgroundColor: isHovered ? '#DDD' : '#666',
                        transition: 'all 500ms'
                    }} />
                </span>
            </div>

            <style jsx global>{`
        body, html {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: rgba(25,25,25,1);
            overflow: hidden;
        }
      `}</style>
        </div>
    )
}
