"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { OperationsMetricCard } from "@/components/operations-metric-card"
import { OperationsTrendChart } from "@/components/operations-trend-chart"

export default function OperationsDashboard() {
  return (
    <DashboardLayout>
      <main className="w-full">
        <div className="container mx-auto px-2 sm:px-4 py-8">
          {/* Trend Chart */}
          <div className="mb-8">
            <OperationsTrendChart />
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
            <OperationsMetricCard
              title="Yield per Acre"
              value="92.5 lbs/acre"
              icon="📈"
              trend={{ value: 4.2, isPositive: true }}
              formula={{
                numerator: "Total Harvested Yield (lbs)",
                denominator: "Total Acres Planted"
              }}
            />
            <OperationsMetricCard
              title="Order Fulfillment"
              value="96.2%"
              icon="📦"
              trend={{ value: 2.8, isPositive: true }}
              formula={{
                numerator: "Orders Delivered on Time",
                denominator: "Total Orders",
                multiplier: 100
              }}
            />
            <OperationsMetricCard
              title="Inventory Turnover"
              value="4.7x"
              icon="🔄"
              trend={{ value: 0.5, isPositive: true }}
              formula={{
                numerator: "Cost of Goods Sold (COGS)",
                denominator: "Average Inventory"
              }}
            />
            <OperationsMetricCard
              title="Spoilage & Wastage"
              value="4.0%"
              icon="❌"
              trend={{ value: 1.2, isPositive: false }}
              formula={{
                numerator: "Spoiled or Wasted Units",
                denominator: "Total Units Produced",
                multiplier: 100
              }}
            />
            <OperationsMetricCard
              title="Avg. Transit Time"
              value="2.7 days"
              icon="🚚"
              trend={{ value: 0.3, isPositive: true }}
              formula={{
                numerator: "Total Transit Days",
                denominator: "Total Deliveries"
              }}
            />
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
} 