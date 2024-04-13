import { Total } from "@/types";
import React from "react";
import AnalyticsCard from "@/components/reusables/AnalyticsCards";
interface Props {
  totals: Total[];
}

const AnalyticsSection: React.FC<Props> = ({ totals }) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-2">Analytics</h2>
      <div className="w-full flex overflow-x-scroll md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {totals.map((total, i) => (
          <AnalyticsCard key={i} heading={total.name} number={total.value} />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsSection;
