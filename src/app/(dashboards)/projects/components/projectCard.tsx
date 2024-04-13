import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function getStatusColor(status: string) {
  switch (status) {
    case "complete":
      return "bg-statusTheme-completed_200 text-statusTheme-completed_100 "; // Use the appropriate tailwind class for completed status
    case "ongoing":
      return "bg-statusTheme-ongoing_200  text-statusTheme-ongoing_100 "; // Use the appropriate tailwind class for ongoing status
    case "hold":
      return "bg-statusTheme-hold_200  text-statusTheme-hold_100 "; // Use the appropriate tailwind class for hold status
    default:
      return "bg-gray-400 text-white"; // Default color for unknown status
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "bg-priorityTheme-high_200 text-priorityTheme-high_100"; // Use the appropriate tailwind class for high priority
    case "Medium":
      return "bg-priorityTheme-medium_200 text-priorityTheme-medium_100"; // Use the appropriate tailwind class for medium priority
    case "Low":
      return "bg-priorityTheme-low_200 text-priorityTheme-low_100"; // Use the appropriate tailwind class for low priority
    default:
      return "bg-gray-100"; // Default color for unknown priority
  }
}

type Props = {
  projectName: string;
  description: string | null;
  status: string;
  priority: string;
  _count: {
    tasks: number;
  };
  account: {
    name: string;
    company: string | null;
  };
};

const projectCard: React.FC<Props> = ({
  projectName,
  description,
  status,
  priority,
  _count,
  account,
}) => {
  return (
    <Card className="p-3 border-0 text-customBlue-300">
      <CardContent className="p-0 pt-0  text-left">
        <div className="flex mb-2 text-xs items-center gap-3">
          <span
            className={`rounded-md font-medium p-1 ${getStatusColor(status)} `}
          >
            {status}
          </span>

          <span
            className={`rounded-md font-medium p-1 ${getPriorityColor(
              priority
            )} `}
          >
            {priority}
          </span>

          <span className="rounded-md bg-gray-100 font-medium text-gray-600 p-1 opacity-90 ">
            Tasks: <span className="font-semibold">{_count.tasks}</span>
          </span>
        </div>
        <p className="text-base mb-1 font-medium">{projectName}</p>
        <p className="text-sm mb-1 text-gray-400">{description}</p>
        <div className="flex gap-3 text-xs items-center">
          <span className="font-medium">{account.name}</span>
          <span className="font-semibold text-gray-300">{account.company}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default projectCard;
