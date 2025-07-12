"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Copy, Check, Heart, ExternalLink } from "lucide-react"

export function BuyMeCoffee() {
  const [copied, setCopied] = useState(false)
  const [showUPI, setShowUPI] = useState(false)
  const upiId = "sami808341@ybl"

  const copyToClipboard = () => {
    // Create a temporary input element to copy text
    const tempInput = document.createElement("input")
    tempInput.value = upiId
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const generateUPILink = () => {
    // Generic UPI deep link
    return `upi://pay?pa=${upiId}&pn=Syed%20Khush&tn=Support%20Digital%20Garden&cu=INR`
  }

  return (
    <div className="text-center">
      <div className="inline-flex flex-col items-center gap-4">
        <Button
          onClick={() => setShowUPI(!showUPI)}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          <Coffee className="w-5 h-5 mr-2" />
          Buy me a coffee
          <Heart className="w-4 h-4 ml-2 text-red-200" />
        </Button>

        {showUPI && (
          <Card className="w-full max-w-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Support this digital garden with a small contribution
                </p>

                {/* UPI ID Display and Copy */}
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 border">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Your UPI ID:</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-sm font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 px-2 py-1 rounded flex-1">
                      {upiId}
                    </code>
                    <Button variant="ghost" size="sm" onClick={copyToClipboard} className="flex-shrink-0">
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-500">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Direct UPI App Link */}
                <a
                  href={generateUPILink()}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                  target="_blank" // Open in new tab/app
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open UPI App
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This will attempt to open your default UPI app.
                </p>

                {/* Instructions */}
                <div className="text-left bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-2">How to pay:</p>
                  <ol className="text-xs text-blue-700 dark:text-blue-300 space-y-1 list-decimal list-inside">
                    <li>Click "Open UPI App" to try direct payment.</li>
                    <li>If that doesn't work, copy the UPI ID.</li>
                    <li>Open any UPI app (PhonePe, Google Pay, Paytm, etc.) manually.</li>
                    <li>Choose "Pay to UPI ID" or "Send Money".</li>
                    <li>Enter the copied UPI ID and the amount.</li>
                    <li>Add note: "Support Digital Garden".</li>
                  </ol>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  "The best way to take care of the future is to take care of the present moment." - Thich Nhat Hanh
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
