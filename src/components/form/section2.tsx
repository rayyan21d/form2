import { useState } from "react";
import { Card, Form, Input, Checkbox, Slider } from "antd";
import { PieChart, Pie, Cell } from "recharts";

type OccupancyType = "truckTrailer" | "trucks" | "trailers";

type Period = "monthly" | "daily";

interface OccupancyRates {
  truckTrailer: { monthly: number; daily: number };
  trucks: { monthly: number; daily: number };
  trailers: { monthly: number; daily: number };
}

const Section2 = () => {
  const [occupancyRates, setOccupancyRates] = useState<OccupancyRates>({
    truckTrailer: { monthly: 60, daily: 40 },
    trucks: { monthly: 60, daily: 40 },
    trailers: { monthly: 60, daily: 40 },
  });

  const pieData = [
    { name: "Truck & Trailer", value: 40 },
    { name: "Trucks", value: 35 },
    { name: "Trailers", value: 25 },
  ];
  const COLORS = ["#364885", "#FFA048", "#4CAF50"];

  // Handle slider changes
  const handleOccupancyChange = (
    type: OccupancyType,
    period: Period,
    value: number
  ) => {
    setOccupancyRates((prev) => ({
      ...prev,
      [type]: { ...prev[type], [period]: value },
    }));
  };

  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-11 lg:gap-x-2">
      {/* Left Form Card */}
      <div className="lg:col-span-6">
        <Card bordered={false} className="shadow-sm">
          <h1 className="text-xl font-bold mb-4">
            Calculate your monthly and daily income
          </h1>
          <h2 className="text-lg mb-4">Tell us about your site</h2>

          <Form layout="vertical">
            <Form.Item label="Site Address">
              <Input placeholder="13636 S Western Ave, Blue Island, IL, 60406" />
            </Form.Item>

            <Form.Item label="Area in Acres">
              <Input placeholder="3" suffix="Acres" />
            </Form.Item>

            <div className="mt-6">
              <h2 className="text-lg mb-4">Space Occupancy</h2>

              <Form.Item>
                <Checkbox checked>Truck & Trailers</Checkbox>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      #No. of Spaces
                    </div>
                    <Input placeholder="12" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      Daily occupancy rate
                    </div>
                    <Input placeholder="16" prefix="$" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      Monthly occupancy rate
                    </div>
                    <Input placeholder="436" prefix="$" />
                  </div>
                </div>
              </Form.Item>

              <Form.Item>
                <Checkbox checked>Trucks Only</Checkbox>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      #No. of Spaces
                    </div>
                    <Input placeholder="12" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      Daily occupancy rate
                    </div>
                    <Input placeholder="16" prefix="$" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      Monthly occupancy rate
                    </div>
                    <Input placeholder="436" prefix="$" />
                  </div>
                </div>
              </Form.Item>

              <Form.Item>
                <Checkbox checked>Trailers Only</Checkbox>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      #No. of Spaces
                    </div>
                    <Input placeholder="12" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      Daily occupancy rate
                    </div>
                    <Input placeholder="16" prefix="$" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">
                      Monthly occupancy rate
                    </div>
                    <Input placeholder="436" prefix="$" />
                  </div>
                </div>

                <h2 className="text-lg mt-8 mb-4">Expenses</h2>
                <div className=" flex gap-2 ">
                  <Form.Item label="Site Maintenance">
                    <Input placeholder="860.00" prefix="$" />
                  </Form.Item>

                  <Form.Item label="Labor">
                    <Input placeholder="1200.00" prefix="$" />
                  </Form.Item>

                  <Form.Item label="Other">
                    <Input placeholder="400.00" prefix="$" />
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </Form>
        </Card>
      </div>

      {/* Right Revenue Card */}
      <div className="lg:col-span-5">
        <Card bordered={false} className="shadow-sm">
          <h2 className="text-lg font-bold mb-4">Estimated Revenue</h2>

          {/* Net Revenue Section */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline">
              <span className="text-gray-600">Net Revenue</span>
              <span className="text-2xl font-semibold">$12340.00</span>
            </div>
            <p className="text-sm text-gray-500">
              A complete breakdown of the net revenue
            </p>
          </div>

          {/* Pie Chart Section */}
          <div className="flex justify-center mb-8">
            <PieChart width={200} height={200}>
              <Pie
                data={pieData}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Legend */}
          <div className="flex gap-2 justify-center mb-8">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>

          {/* Revenue Table Section */}
          <div className="mb-8">
            <h3 className="text-lg mb-4">
              Revenue Per Space Type and Occupancy
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-sm font-medium text-gray-500">
                  SPACE TYPE
                </div>
                <div className="text-sm font-medium text-gray-500">MONTHLY</div>
                <div className="text-sm font-medium text-gray-500">DAILY</div>
              </div>

              {/* Truck & Trailer Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="font-medium">Truck & Trailer</div>
                  <div className="text-sm text-gray-500">16 Spaces</div>
                </div>
                <div>
                  <div className="font-medium">$4260.00</div>
                  <div className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-500 mb-2">
                    {occupancyRates.truckTrailer.monthly}% Occupancy
                  </div>
                  <Slider
                    value={occupancyRates.truckTrailer.monthly}
                    onChange={(value) =>
                      handleOccupancyChange("truckTrailer", "monthly", value)
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="font-medium">$460.00</div>
                  <div className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-500 mb-2">
                    {occupancyRates.truckTrailer.daily}% Occupancy
                  </div>
                  <Slider
                    value={occupancyRates.truckTrailer.daily}
                    onChange={(value) =>
                      handleOccupancyChange("truckTrailer", "daily", value)
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Trucks Row */}
              <div className="grid grid-cols-3 gap-4 mb-6 border-t border-gray-200 pt-4">
                <div>
                  <div className="font-medium">Trucks</div>
                  <div className="text-sm text-gray-500">20 Spaces</div>
                </div>
                <div>
                  <div className="font-medium">$4260.00</div>
                  <div className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-500 mb-2">
                    {occupancyRates.trucks.monthly}% Occupancy
                  </div>
                  <Slider
                    value={occupancyRates.trucks.monthly}
                    onChange={(value) =>
                      handleOccupancyChange("trucks", "monthly", value)
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="font-medium">$460.00</div>
                  <div className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-500 mb-2">
                    {occupancyRates.trucks.daily}% Occupancy
                  </div>
                  <Slider
                    value={occupancyRates.trucks.daily}
                    onChange={(value) =>
                      handleOccupancyChange("trucks", "daily", value)
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Trailers Row */}
              <div className="grid grid-cols-3 gap-4 mb-6 border-t border-gray-200 pt-4">
                <div>
                  <div className="font-medium">Trailers</div>
                  <div className="text-sm text-gray-500">12 Spaces</div>
                </div>
                <div>
                  <div className="font-medium">$4260.00</div>
                  <div className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-500 mb-2">
                    {occupancyRates.trailers.monthly}% Occupancy
                  </div>
                  <Slider
                    value={occupancyRates.trailers.monthly}
                    onChange={(value) =>
                      handleOccupancyChange("trailers", "monthly", value)
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="font-medium">$460.00</div>
                  <div className="inline-block bg-white rounded-full px-3 py-1 text-sm text-gray-500 mb-2">
                    {occupancyRates.trailers.daily}% Occupancy
                  </div>
                  <Slider
                    value={occupancyRates.trailers.daily}
                    onChange={(value) =>
                      handleOccupancyChange("trailers", "daily", value)
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Total Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-4">
                <div></div>
                <div className="font-medium">$12780.00</div>
                <div className="font-medium">$1380.00</div>
              </div>
            </div>
          </div>

          {/* Rest of the card content remains unchanged */}
          <div className="mt-8">
            {/* ... existing expenses and CTA sections ... */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Section2;
