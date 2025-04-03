import Image from "next/image"
import { Header } from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative">
        {/* Background image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/mixed-berries.jpg"
            alt="Mixed Berries Background"
            fill
            className="object-cover opacity-60"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        
        {/* Dashboard content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
} 