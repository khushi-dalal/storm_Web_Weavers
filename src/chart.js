import { LineChart as TremorLineChart } from "@tremor/react";
import { Card, Title } from "@tremor/react";
import React from "react";

const chartdata2 = [
  // your data...
];

const LineChartInteractiveExample = () => {
    const [value, setValue] = React.useState(null);
    return (
      <>
        <Card>
          <Title>Closed Pull Requests</Title>
          <TremorLineChart
            className="h-72 mt-4"
            data={chartdata2}
            index="date"
            categories={["2022", "2023"]}
            colors={["neutral", "indigo"]}
            yAxisWidth={30}
            onValueChange={(v) => setValue(v)}
            connectNulls={true}
          />
        </Card>
        <pre>{JSON.stringify(value)}</pre>
      </>
    );
};
  
export default LineChartInteractiveExample;
  