import { Card, Form, Input, Checkbox, Slider } from "antd";
import { PieChart, Pie, Cell } from "recharts";

const Section1 = () => {
  const pieData = [
    { name: "Truck & Trailer", value: 40 },
    { name: "Trucks", value: 35 },
    { name: "Trailers", value: 25 },
  ];
  const COLORS = ["#364885", "#FFA048", "#4CAF50"];

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

                <div className="mt-4 grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        Daily Occupancy %
                      </span>
                      <span>76</span>
                    </div>
                    <Slider defaultValue={76} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        Monthly Occupancy %
                      </span>
                      <span>76</span>
                    </div>
                    <Slider defaultValue={76} />
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

                <div className="mt-4 grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        Daily Occupancy %
                      </span>
                      <span>76</span>
                    </div>
                    <Slider defaultValue={76} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        Monthly Occupancy %
                      </span>
                      <span>76</span>
                    </div>
                    <Slider defaultValue={76} />
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

                <div className="mt-4 grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        Daily Occupancy %
                      </span>
                      <span>76</span>
                    </div>
                    <Slider defaultValue={76} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        Monthly Occupancy %
                      </span>
                      <span>76</span>
                    </div>
                    <Slider defaultValue={76} />
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

          <div className="mb-8">
            <div className="flex justify-between items-baseline">
              <span className="text-gray-600">Net Revenue</span>
              <span className="text-2xl font-semibold">$12340.00</span>
            </div>
            <p className="text-sm text-gray-500">
              A complete breakdown of the net revenue
            </p>
          </div>

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

          <div className="mb-8">
            <h3 className="text-lg mb-4">
              Revenue Per Space Type and Occupancy
            </h3>
            <table className="w-full">
              <thead className="text-gray-500 text-sm">
                <tr>
                  <th className="text-left font-normal pb-2">SPACE TYPE</th>
                  <th className="text-right font-normal pb-2">MONTHLY</th>
                  <th className="text-right font-normal pb-2">DAILY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>Truck & Trailer</div>
                    <div className="text-sm text-gray-500">12 Spaces</div>
                  </td>
                  <td className="text-right">
                    <div>$4260.00</div>
                    <div className="text-sm text-gray-500">60% Occupancy</div>
                  </td>
                  <td className="text-right">
                    <div>$460.00</div>
                    <div className="text-sm text-gray-500">40% Occupancy</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-8">
            <h3 className="text-lg mb-4">
              Revenue Per Space Type and Occupancy
            </h3>
            <table className="w-full">
              <thead className="text-gray-500 text-sm">
                <tr>
                  <th className="text-left font-normal pb-2">SPACE TYPE</th>
                  <th className="text-right font-normal pb-2">MONTHLY</th>
                  <th className="text-right font-normal pb-2">DAILY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2">
                    <div>Truck & Trailer</div>
                    <div className="text-sm text-gray-500">12 Spaces</div>
                  </td>
                  <td className="text-right py-2">
                    <div>$4260.00</div>
                    <div className="text-sm text-gray-500">60% Occupancy</div>
                  </td>
                  <td className="text-right py-2">
                    <div>$460.00</div>
                    <div className="text-sm text-gray-500">40% Occupancy</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">
                    <div>Trucks Only</div>
                    <div className="text-sm text-gray-500">16 Spaces</div>
                  </td>
                  <td className="text-right py-2">
                    <div>$12780.00</div>
                    <div className="text-sm text-gray-500">76% Occupancy</div>
                  </td>
                  <td className="text-right py-2">
                    <div>$1380.00</div>
                    <div className="text-sm text-gray-500">76% Occupancy</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">
                    <div>Trailers Only</div>
                    <div className="text-sm text-gray-500">13 Spaces</div>
                  </td>
                  <td className="text-right py-2">
                    <div>$3900.00</div>
                    <div className="text-sm text-gray-500">76% Occupancy</div>
                  </td>
                  <td className="text-right py-2">
                    <div>$160.00</div>
                    <div className="text-sm text-gray-500">76% Occupancy</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg">Overall Revenue</h3>
              <span className="text-xl font-semibold">$14340.00</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 mb-4">
                EXPENSES
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Site Maintenance</span>
                  <span>$860.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Labor</span>
                  <span>$1200.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Other</span>
                  <span>$400.00</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200">
                  <span className="font-medium">Total Expenses</span>
                  <span className="font-medium">$2460.00</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                Join us to boost your revenue effortlessly—partner with our
                platform to fill more spots, hassle-free!
              </p>
              <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Section1;
