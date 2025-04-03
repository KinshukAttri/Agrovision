import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RoleSelectionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  onClick: () => void
  isSelected?: boolean
}

export function RoleSelectionCard({
  title,
  description,
  icon,
  onClick,
  isSelected = false,
}: RoleSelectionCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105",
        isSelected && "border-2 border-blue-600 shadow-lg scale-105"
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold text-blue-900">{title}</CardTitle>
        <div className="text-blue-600">{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
} 