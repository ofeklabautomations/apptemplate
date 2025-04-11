"use client";

import { useState } from "react";
import { BarChart, LineChart, Bar, Line } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@repo/ui";
import type { ChartConfig } from "@repo/ui";
import UpgradeButton from "@/components/upgrade-dialog";
import { Subscription } from "@updatedev/js";

interface VisitorData {
  date: string;
  visits: number;
  pageViews: number;
  avgTimeOnSite: number;
}

interface VisitorPath {
  timestamp: string;
  path: string[];
  duration: number;
}

export default function Console({
  subscriptionData,
}: {
  subscriptionData: Subscription[];
}) {
  const [analyticsData] = useState<VisitorData[]>([
    { date: "2024-03-20", visits: 120, pageViews: 380, avgTimeOnSite: 2.5 },
    { date: "2024-03-21", visits: 150, pageViews: 420, avgTimeOnSite: 3.2 },
    { date: "2024-03-22", visits: 180, pageViews: 550, avgTimeOnSite: 2.8 },
    { date: "2024-03-23", visits: 190, pageViews: 600, avgTimeOnSite: 3.5 },
    { date: "2024-03-24", visits: 220, pageViews: 750, avgTimeOnSite: 4.1 },
  ]);

  const [visitorPaths] = useState<VisitorPath[]>([
    {
      timestamp: "2024-03-24 10:30:00",
      path: ["/home", "/products", "/checkout"],
      duration: 340,
    },
    {
      timestamp: "2024-03-24 11:15:00",
      path: ["/home", "/blog", "/contact"],
      duration: 250,
    },
  ]);

  const chartConfig = {
    visits: {
      label: "Visits",
      color: "#2563eb", // blue-600
    },
    pageViews: {
      label: "Page Views",
      color: "#60a5fa", // blue-400
    },
    avgTimeOnSite: {
      label: "Average Time on Site",
      color: "#3b82f6", // blue-500
    },
  } satisfies ChartConfig;

  const showPaidContent =
    subscriptionData != null &&
    subscriptionData.length > 0 &&
    subscriptionData[0].status === "active";

  return (
    <div className="h-full w-full p-6">
      <div className="max-w-console-width mx-auto space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Visits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {analyticsData.reduce((sum, day) => sum + day.visits, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Last 5 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Page Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {analyticsData.reduce((sum, day) => sum + day.pageViews, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Last 5 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Pages/Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(
                  analyticsData.reduce((sum, day) => sum + day.pageViews, 0) /
                  analyticsData.reduce((sum, day) => sum + day.visits, 0)
                ).toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground">Last 5 days</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>Daily visits and page views</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <BarChart data={analyticsData}>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="visits"
                      fill="var(--color-visits)"
                      radius={4}
                    />
                    <Bar
                      dataKey="pageViews"
                      fill="var(--color-pageViews)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Engagement</CardTitle>
              <CardDescription>Average time on site (minutes)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <LineChart data={analyticsData}>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="avgTimeOnSite"
                      stroke="var(--color-avgTimeOnSite)"
                      strokeWidth={2}
                      dot={{
                        fill: "var(--color-avgTimeOnSite)",
                        strokeWidth: 2,
                        r: 4,
                      }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Visitor Paths</CardTitle>
                <CardDescription>
                  Track user journeys through your site
                </CardDescription>
              </div>
              {!showPaidContent && (
                <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-sm">
                  Premium Feature
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {showPaidContent ? (
              <div className="space-y-4">
                {visitorPaths.map((path, index) => (
                  <div key={index} className="border rounded p-4">
                    <div className="flex justify-between mb-2">
                      <span>{path.timestamp}</span>
                      <span>{path.duration}s</span>
                    </div>
                    <div className="flex items-center">
                      {path.path.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center">
                          <span className="bg-secondary/20 border px-3 py-1 rounded">
                            {step}
                          </span>
                          {stepIndex < path.path.length - 1 && (
                            <span className="mx-2 text-muted-foreground">
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-muted p-8 rounded-lg text-center">
                <p className="text-muted-foreground mb-4">
                  Upgrade to premium to see detailed visitor journey analysis
                </p>
                <UpgradeButton />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
