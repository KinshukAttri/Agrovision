import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface OperationsMetricCardProps {
  title: string
  value: string
  icon: string
  trend?: {
    value: number
    isPositive: boolean
  }
  formula: {
    numerator: string
    denominator: string
    multiplier?: number
  }
  className?: string
}

export function OperationsMetricCard({
  title,
  value,
  icon,
  trend,
  formula,
  className,
}: OperationsMetricCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className={cn(
            "bg-white/80 backdrop-blur-sm border-white/20 shadow-sm hover:bg-white/90 transition-all duration-200 hover:scale-105",
            className
          )}>
            <CardContent className="p-3">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-medium text-gray-600 flex items-center gap-1">
                  {title} <span className="text-lg">{icon}</span>
                </h3>
                {trend && (
                  <span className={cn(
                    "text-xs font-medium px-1.5 py-0.5 rounded-full",
                    trend.isPositive ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
                  )}>
                    {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
                  </span>
                )}
              </div>
              <div className="text-xl font-bold text-gray-900">{value}</div>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="top" className="w-72 p-3">
          <div className="text-xs">
            <div className="font-medium mb-1">Formula:</div>
            <div className="flex flex-col items-center">
              <div className="px-3 py-1">{formula.numerator}</div>
              <div className="w-full border-t border-gray-200 my-1"></div>
              <div className="px-3 py-1">{formula.denominator}</div>
              {formula.multiplier && (
                <div className="mt-1">× {formula.multiplier}</div>
              )}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 