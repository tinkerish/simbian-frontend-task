import { AlertIcon } from "./AlertIcon";
import { forwardRef } from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  count: number;
  alerts: { id: string; icon: string }[];
  color: "red" | "yellow" | "green";
  isSimbian: boolean;
}

export const VerticalAlertCard = forwardRef<HTMLDivElement, Props>(
  ({ title, icon, count, alerts, isSimbian }, ref) => {
    return (
      <div
        // layout
        ref={ref}
        className={`w-[90%] rounded-xl shadow-md p-4 ${
          count > 0 && title === "Active Threats"
            ? "bg-red-400/20"
            : "bg-white/10"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/12 rounded w-fit p-1">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <span
            className={`ml-auto text-lg font-bold ${
              isSimbian && "text-green-400"
            }`}
          >
            {count}
          </span>
        </div>
        <div className="flex mt-6 overflow-x-auto h-[50px] bg-white/12 rounded-lg px-1">
          {alerts.map(({ id, icon }) => (
            <div className="flex items-center justify-center" key={id}>
              <AlertIcon key={id} icon={icon} isSimbian={isSimbian} />
            </div>
          ))}
        </div>
      </div>
    );
  }
);
VerticalAlertCard.displayName = "VerticalAlertCard";
