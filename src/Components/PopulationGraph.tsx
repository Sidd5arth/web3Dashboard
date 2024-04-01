import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import usePopulationData from "../Hooks/usePopulationData";
import Button from "./Button/Button";
import "./population.css";

interface PopulationGraphProps {
  type: any;
  viewportWidth: number;
}

const PopulationGraph: React.FC<PopulationGraphProps> = ({
  type,
  viewportWidth,
}) => {
  console.log(viewportWidth);
  const { isLoading, data } = usePopulationData();
  const [chartInstance, setChartInstance] = useState<Chart | null>(null);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  console.log(data);
  useEffect(() => {
    if (!isLoading && data) {
      const ctx = chartRef.current;
      if (ctx && chartInstance) {
        chartInstance.destroy();
      }
      const newChartInstance = new Chart(ctx!, {
        type: type,
        data: {
          labels: data.map((item: any) => item.Year),
          datasets: [
            {
              label: "Population",
              data: data.map((item: any) => item.Population),
              fill: false,
              borderColor: "#07d017",
              borderWidth: 2,
              tension: 0.5,
              pointBackgroundColor: "rgb(7, 208, 23)",
              pointRadius: 1,
              pointHoverRadius: 4,
            },
          ],
        },
        options: {
          layout: {
            padding: {
              left: 10,
              right: 30,
              top: 10,
              bottom: 10,
            },
          },
          scales: {
            y: {
              suggestedMin: 310000000,
              suggestedMax: 320000000,
              beginAtZero: false,
              title: {
                display: true,
                text: "Population (Millons)",
                font: {
                  family: "regular",
                },
              },

              ticks: {
                callback: (value: any) => `${value / 1000000} M`,
                font: {
                  family: "regular",
                },
              },
            },
            x: {
              title: {
                display: true,
                text: "Year",
                font: {
                  family: "regular",
                },
              },
              ticks: {
                font: {
                  family: "regular",
                },
              },
            },
          },
          plugins: {
            tooltip: {
              enabled: true,
              displayColors: false,
              padding: 10,
              backgroundColor: "rgba(41, 45, 20, 0.7)",
              titleFont: {
                size: 16,
                weight: "bold",
                family: "medium",
              },
              bodyFont: {
                size: 14,
                family: "regular",
              },
              callbacks: {
                label: (context: any) => {
                  return `Population: ${context.parsed.y.toLocaleString()}`;
                },
              },
            },
          },
        },
      });
      setChartInstance(newChartInstance);
    }
  }, [isLoading, data, viewportWidth]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isLoading ? (
        <p style={{ color: "white" }}>Loading...</p>
      ) : (
        <div className="rounded pop">
          <div className="d-flex justify-content-start  rounded w-100 p-3">
            <p style={{ margin: "0" }} className="text-white">
              {`Population Overview ${type} chart`}
            </p>
          </div>
          <canvas
            ref={chartRef}
            id="populationChart"
            style={{
              borderTop: "1px solid #555",
              borderBottom: "1px solid #555",
            }}
          ></canvas>
          <div className="d-flex justify-content-between align-items-center   rounded w-100 p-3">
            <p style={{ margin: "0" }} className="text-white">
              Get in depth chart trades
            </p>
            <Button
              textColor="black"
              title="Trade"
              paddingUD={4}
              paddingLR={10}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopulationGraph;
