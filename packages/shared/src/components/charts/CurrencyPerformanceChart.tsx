/**
 * UNIFIED CurrencyPerformanceChart Component
 * Consolidates from:
 * - components/CurrencyPerformanceChart.tsx
 * - apps/diversifi/components/CurrencyPerformanceChart.tsx
 * 
 * Environment-aware chart component that adapts styling based on context
 */

import React, { useEffect, useRef } from "react";
import { getRegionColors, AppEnvironment, type Region } from "../../index";

export interface CurrencyPerformanceChartProps {
  data: {
    dates: string[];
    currencies: {
      symbol: string;
      name: string;
      region: Region;
      values: number[];
      percentChange: number;
    }[];
    baseCurrency: string;
    source?: "api" | "cache";
  };
  title?: string;
  height?: number;
  showLegend?: boolean;
  environment?: 'standard' | 'enhanced';
}

export function CurrencyPerformanceChart({
  data,
  title = "Currency Performance",
  height = 400,
  showLegend = true,
  environment
}: CurrencyPerformanceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Auto-detect environment if not provided
  const chartEnvironment = environment || AppEnvironment.getType();
  const REGION_COLORS = getRegionColors(chartEnvironment);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data.currencies.length) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Chart dimensions
    const padding = 60;
    const chartWidth = rect.width - 2 * padding;
    const chartHeight = rect.height - 2 * padding - (showLegend ? 60 : 0);

    // Find min/max values across all currencies
    const allValues = data.currencies.flatMap(currency => currency.values);
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const valueRange = maxValue - minValue;

    // Helper functions
    const getX = (index: number) => padding + (index / (data.dates.length - 1)) * chartWidth;
    const getY = (value: number) => padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;

    // Draw grid lines
    ctx.strokeStyle = chartEnvironment === 'enhanced' ? "#E5E7EB" : "#F3F4F6";
    ctx.lineWidth = 1;

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i / 5) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + chartWidth, y);
      ctx.stroke();
    }

    // Vertical grid lines
    const gridCount = Math.min(data.dates.length - 1, 6);
    for (let i = 0; i <= gridCount; i++) {
      const x = padding + (i / gridCount) * chartWidth;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, padding + chartHeight);
      ctx.stroke();
    }

    // Draw currency lines
    data.currencies.forEach((currency, currencyIndex) => {
      const color = REGION_COLORS[currency.region] || "#A0AEC0";
      
      // Draw line
      ctx.strokeStyle = color;
      ctx.lineWidth = chartEnvironment === 'enhanced' ? 3 : 2;
      ctx.beginPath();
      
      currency.values.forEach((value, index) => {
        const x = getX(index);
        const y = getY(value);
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();

      // Draw data points
      ctx.fillStyle = color;
      currency.values.forEach((value, index) => {
        const x = getX(index);
        const y = getY(value);
        
        ctx.beginPath();
        ctx.arc(x, y, chartEnvironment === 'enhanced' ? 4 : 3, 0, 2 * Math.PI);
        ctx.fill();
      });
    });

    // Draw axes
    ctx.strokeStyle = chartEnvironment === 'enhanced' ? "#374151" : "#6B7280";
    ctx.lineWidth = 2;

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.stroke();

    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = chartEnvironment === 'enhanced' ? "#1F2937" : "#4B5563";
    ctx.font = `${chartEnvironment === 'enhanced' ? '12' : '11'}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    ctx.textAlign = "center";

    // X-axis labels (dates)
    const labelCount = Math.min(data.dates.length, 6);
    for (let i = 0; i < labelCount; i++) {
      const dateIndex = Math.floor((i / (labelCount - 1)) * (data.dates.length - 1));
      const x = getX(dateIndex);
      const date = new Date(data.dates[dateIndex]);
      const label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      ctx.fillText(label, x, padding + chartHeight + 20);
    }

    // Y-axis labels (values)
    ctx.textAlign = "right";
    for (let i = 0; i <= 5; i++) {
      const value = minValue + (i / 5) * valueRange;
      const y = padding + chartHeight - (i / 5) * chartHeight;
      ctx.fillText(value.toFixed(2), padding - 10, y + 4);
    }

    // Draw title
    if (title) {
      ctx.fillStyle = chartEnvironment === 'enhanced' ? "#111827" : "#1F2937";
      ctx.font = `bold ${chartEnvironment === 'enhanced' ? '16' : '14'}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(title, rect.width / 2, 25);
    }

    // Draw legend
    if (showLegend) {
      const legendY = padding + chartHeight + 45;
      const legendItemWidth = chartWidth / data.currencies.length;
      
      data.currencies.forEach((currency, index) => {
        const x = padding + index * legendItemWidth + legendItemWidth / 2;
        const color = REGION_COLORS[currency.region] || "#A0AEC0";
        
        // Legend color box
        ctx.fillStyle = color;
        ctx.fillRect(x - 25, legendY - 8, 16, 16);
        
        // Legend text
        ctx.fillStyle = chartEnvironment === 'enhanced' ? "#1F2937" : "#4B5563";
        ctx.font = `${chartEnvironment === 'enhanced' ? '12' : '11'}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText(
          `${currency.symbol} (${currency.percentChange >= 0 ? '+' : ''}${currency.percentChange.toFixed(1)}%)`,
          x - 5,
          legendY + 4
        );
      });
    }

  }, [data, title, height, showLegend, chartEnvironment, REGION_COLORS]);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: `${height}px` }}
        className={`rounded-lg ${chartEnvironment === 'enhanced' ? 'bg-white shadow-lg' : 'bg-gray-50'}`}
      />
      {data.source && (
        <p className={`text-xs mt-2 ${chartEnvironment === 'enhanced' ? 'text-gray-600' : 'text-gray-500'}`}>
          Data source: {data.source === 'api' ? 'Live API' : 'Cached'}
        </p>
      )}
    </div>
  );
}