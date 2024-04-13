import React from "react";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  heading: string;
  number: string;
};

const AnalyticsCard: React.FC<Props> = ({ heading, number }) => {
  return (
    <Card className=" min-w-[200px] sm:min-w-0   border-0 bg-primaryTheme-50">
      <CardHeader className="p-2  ">
        <CardTitle className="text-xl text-primaryTheme-300">{heading}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <h1 className="text-4xl text-primaryTheme-400">{number}</h1>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
