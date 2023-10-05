import React, { useState } from "react";
import { Card, Title, DonutChart } from "@tremor/react";

// Define your data
const cities = [
  { name: "City1", value: total1 },
  { name: "City2", value: total2 },
  { name: "City3", value: total3 },
  { name: "City4", value: total4 },
  { name: "City5", value: total5 },
];

const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function Dataset() {
  const [showChart, setShowChart] = useState(false);

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <button onClick={toggleChart}>Toggle Chart</button>

      {showChart && (
        <Card className="max-w-lg">
          <Title>Points</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="value" // Assuming "value" is the property for values
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      )}
    </div>
  );
}

export default Dataset;
