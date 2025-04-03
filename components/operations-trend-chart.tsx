import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from "chart.js"
import { useState, useMemo } from "react"
import { FarmSelect } from "./farm-select"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
      align: "start" as const,
      labels: {
        boxWidth: 10,
        padding: 8,
        font: {
          size: 11
        }
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    }
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      grid: {
        color: "rgba(0, 0, 0, 0.05)"
      },
      ticks: {
        font: {
          size: 10
        }
      }
    },
    x: {
      grid: {
        color: "rgba(0, 0, 0, 0.05)"
      },
      ticks: {
        font: {
          size: 10
        }
      }
    }
  },
}

// Sample location-specific data
const locationData = {
  "all": {
    yieldPerAcre: [85, 88, 87, 89, 91, 92],
    orderFulfillment: [92, 93, 94, 95, 95, 96],
    inventoryTurnover: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7],
    spoilageRate: [5.2, 5.0, 4.8, 4.5, 4.2, 4.0],
    avgTransitTime: [3.0, 2.9, 2.8, 2.8, 2.7, 2.7]
  },
  "us-la": {
    yieldPerAcre: [88, 90, 91, 92, 93, 94],
    orderFulfillment: [94, 95, 95, 96, 96, 97],
    inventoryTurnover: [4.5, 4.6, 4.7, 4.8, 4.9, 5.0],
    spoilageRate: [4.8, 4.6, 4.4, 4.2, 4.0, 3.8],
    avgTransitTime: [2.8, 2.7, 2.6, 2.6, 2.5, 2.5]
  },
  "peru-lima": {
    yieldPerAcre: [82, 84, 85, 87, 88, 90],
    orderFulfillment: [90, 91, 92, 93, 94, 95],
    inventoryTurnover: [4.0, 4.1, 4.2, 4.3, 4.4, 4.5],
    spoilageRate: [5.5, 5.3, 5.1, 4.8, 4.5, 4.2],
    avgTransitTime: [3.2, 3.1, 3.0, 2.9, 2.8, 2.8]
  },
  "mexico-jalisco": {
    yieldPerAcre: [84, 86, 87, 89, 90, 91],
    orderFulfillment: [91, 92, 93, 94, 95, 96],
    inventoryTurnover: [4.1, 4.2, 4.3, 4.4, 4.5, 4.6],
    spoilageRate: [5.4, 5.2, 5.0, 4.7, 4.4, 4.1],
    avgTransitTime: [3.1, 3.0, 2.9, 2.8, 2.7, 2.7]
  },
  "morocco-drz": {
    yieldPerAcre: [80, 82, 84, 86, 88, 89],
    orderFulfillment: [89, 90, 91, 92, 93, 94],
    inventoryTurnover: [3.8, 3.9, 4.0, 4.1, 4.2, 4.3],
    spoilageRate: [5.8, 5.6, 5.4, 5.1, 4.8, 4.5],
    avgTransitTime: [3.4, 3.3, 3.2, 3.1, 3.0, 3.0]
  },
  "uk-london": {
    yieldPerAcre: [86, 88, 89, 90, 91, 92],
    orderFulfillment: [93, 94, 95, 96, 96, 97],
    inventoryTurnover: [4.3, 4.4, 4.5, 4.6, 4.7, 4.8],
    spoilageRate: [5.0, 4.8, 4.6, 4.3, 4.0, 3.8],
    avgTransitTime: [2.9, 2.8, 2.7, 2.7, 2.6, 2.6]
  },
  "egypt-abou": {
    yieldPerAcre: [81, 83, 85, 87, 89, 90],
    orderFulfillment: [90, 91, 92, 93, 94, 95],
    inventoryTurnover: [3.9, 4.0, 4.1, 4.2, 4.3, 4.4],
    spoilageRate: [5.7, 5.5, 5.3, 5.0, 4.7, 4.4],
    avgTransitTime: [3.3, 3.2, 3.1, 3.0, 2.9, 2.9]
  },
  "china-yunnan": {
    yieldPerAcre: [83, 85, 86, 88, 90, 91],
    orderFulfillment: [91, 92, 93, 94, 95, 96],
    inventoryTurnover: [4.0, 4.1, 4.2, 4.3, 4.4, 4.5],
    spoilageRate: [5.5, 5.3, 5.1, 4.8, 4.5, 4.2],
    avgTransitTime: [3.2, 3.1, 3.0, 2.9, 2.8, 2.8]
  },
  "india-uttarakhand": {
    yieldPerAcre: [82, 84, 85, 87, 89, 90],
    orderFulfillment: [90, 91, 92, 93, 94, 95],
    inventoryTurnover: [3.9, 4.0, 4.1, 4.2, 4.3, 4.4],
    spoilageRate: [5.6, 5.4, 5.2, 4.9, 4.6, 4.3],
    avgTransitTime: [3.3, 3.2, 3.1, 3.0, 2.9, 2.9]
  }
}

export function OperationsTrendChart() {
  const [selectedFarm, setSelectedFarm] = useState("all")

  const chartData = useMemo(() => {
    const data = locationData[selectedFarm as keyof typeof locationData] || locationData.all

    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Yield per Acre",
          data: data.yieldPerAcre,
          borderColor: "rgb(99, 102, 241)",
          backgroundColor: "rgba(99, 102, 241, 0.5)",
          tension: 0.3
        }

      ],
    }
  }, [selectedFarm])

  return (
    <Card className="w-full shadow-sm bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 transition-colors">
      <CardHeader className="px-4 py-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Yield per Acre</CardTitle>
          <FarmSelect 
            value={selectedFarm} 
            onValueChange={setSelectedFarm} 
          />
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:px-4 pb-3">
        <div className="h-[260px] w-full">
          <Line options={options} data={chartData} />
        </div>
      </CardContent>
    </Card>
  )
} 