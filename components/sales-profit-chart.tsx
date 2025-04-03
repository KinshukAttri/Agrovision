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
        boxWidth: 16,
        padding: 16,
      }
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      title: {
        display: true,
        text: "Amount (USD Millions)"
      },
      grid: {
        color: "rgba(0, 0, 0, 0.05)"
      }
    },
    x: {
      grid: {
        color: "rgba(0, 0, 0, 0.05)"
      }
    }
  },
}

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Fruitist Jumbo Sales",
      data: [65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120],
      borderColor: "rgb(99, 102, 241)",
      backgroundColor: "rgba(99, 102, 241, 0.5)",
      yAxisID: "y",
      tension: 0.3
    },
    {
      label: "Fruitist Sales",
      data: [45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82],
      borderColor: "rgb(147, 51, 234)",
      backgroundColor: "rgba(147, 51, 234, 0.5)",
      yAxisID: "y",
      tension: 0.3
    },
    {
      label: "Fruitist Jumbo Profit",
      data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.5)",
      yAxisID: "y",
      tension: 0.3
    },
    {
      label: "Fruitist Profit",
      data: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      borderColor: "rgb(234, 179, 8)",
      backgroundColor: "rgba(234, 179, 8, 0.5)",
      yAxisID: "y",
      tension: 0.3
    },
  ],
}

export function SalesProfitChart() {
  return (
    <Card className="w-full shadow-sm bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 transition-colors">
      <CardHeader className="px-6">
        <CardTitle>Sales and Profit Overview</CardTitle>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <div className="h-[450px] w-full">
          <Line options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  )
} 