"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RoleSelectionCard } from "@/components/role-selection-card"
import { Header } from "@/components/header"
import { 
  Building2, 
  LineChart, 
  Scale, 
  Users, 
  ClipboardCheck, 
  Settings 
} from "lucide-react"

const roles = [
  {
    id: "ceo",
    title: "CEO",
    description: "Executive overview and strategic insights",
    icon: <Building2 className="h-6 w-6" />,
    route: "/dashboard/ceo"
  },
  {
    id: "cfo",
    title: "CFO",
    description: "Financial overview and analytics dashboard",
    icon: <LineChart className="h-6 w-6" />,
    route: "/dashboard/cfo"
  },
  {
    id: "governance",
    title: "Governance",
    description: "Compliance and regulatory dashboard",
    icon: <Scale className="h-6 w-6" />,
    route: "/dashboard/governance"
  },
  {
    id: "crm-sales",
    title: "CRM and Sales",
    description: "Customer relationship and sales analytics",
    icon: <Users className="h-6 w-6" />,
    route: "/dashboard/crm-sales"
  },
  {
    id: "quality-officer",
    title: "Quality Officer",
    description: "Quality control and standards dashboard",
    icon: <ClipboardCheck className="h-6 w-6" />,
    route: "/dashboard/quality"
  },
  {
    id: "operations",
    title: "Operations Team",
    description: "Operational metrics and efficiency tracking",
    icon: <Settings className="h-6 w-6" />,
    route: "/dashboard/operations"
  }
]

export default function Home() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleRoleSelect = (roleId: string, route: string) => {
    setSelectedRole(roleId)
    setTimeout(() => {
      router.push(route)
    }, 300)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Welcome to Agrovision Dashboards
            </h1>
            <p className="text-lg text-gray-600">
              Select your role to access your personalized dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role) => (
              <RoleSelectionCard
                key={role.id}
                title={role.title}
                description={role.description}
                icon={role.icon}
                isSelected={selectedRole === role.id}
                onClick={() => handleRoleSelect(role.id, role.route)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
