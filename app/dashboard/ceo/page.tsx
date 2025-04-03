"use client"

import { MetricCard } from "@/components/metric-card"
import { SalesProfitChart } from "@/components/sales-profit-chart"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function CEODashboard() {
  return (
    <DashboardLayout>
      <main className="w-full">
        <div className="container mx-auto px-2 sm:px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">CEO Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Overview of key business metrics and performance indicators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <MetricCard
              title="Return on Investment (ROI)"
              value="32.5%"
              trend={{ value: 5.2, isPositive: true }}
            />
            <MetricCard
              title="Market Share - Premium"
              value="20%"
              trend={{ value: 2.8, isPositive: true }}
            />
            <MetricCard
              title="Gross Margin"
              value="45.8%"
              trend={{ value: 1.5, isPositive: true }}
            />
            <MetricCard
              title="Revenue Growth"
              value="28.3%"
              trend={{ value: 3.7, isPositive: true }}
            />
          </div>

          <div className="grid grid-cols-1">
            <SalesProfitChart />
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
} 