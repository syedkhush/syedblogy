"use client"

import dynamic from 'next/dynamic'
import NavigationOverlay from '@/components/navigation-overlay'

// Dynamically import Three.js component to avoid SSR issues
const UmbralScene = dynamic(() => import('@/components/umbral-scene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="text-black text-xl">Loading...</div>
    </div>
  ),
})

export default function HomePage() {
  return (
    <>
      <UmbralScene />
      <NavigationOverlay />
    </>
  )
}
