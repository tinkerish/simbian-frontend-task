"use client";

import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BellOff, ShieldAlert, ShieldX } from "lucide-react";
import { VerticalAlertCard } from "./VerticalCard";
import { Alert } from "../sections/WithoutSimbian";
export interface Counts {
  [key: string]: number;
}
export interface AlertFlowProps {
  alerts: Alert[];
  setAlerts: React.Dispatch<React.SetStateAction<Alert[]>>;
  counts: Counts;
  setCounts: React.Dispatch<React.SetStateAction<Counts>>;
  setShowWithSimbian?: React.Dispatch<React.SetStateAction<boolean>>;
  isSimbian: boolean;
}
const AlertFlow: FC<AlertFlowProps> = ({
  alerts,
  setAlerts,
  counts,
  setCounts,
  setShowWithSimbian,
  isSimbian,
}) => {
  // const [alerts, setAlerts] = useState(initialAlerts);
  const ignoredRef = useRef<HTMLDivElement>(null);
  const closedRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [from, setFrom] = useState("ignored");
  const [movingAlert, setMovingAlert] = useState(null);
  useLayoutEffect(() => {
    if (isSimbian) return;
    if (
      !ignoredRef.current ||
      !activeRef.current ||
      !containerRef.current ||
      !closedRef.current
    )
      return;
    const moveAlert = () => {
      let alertToMove;
      alerts.forEach((a) => {
        if (a.type === from) alertToMove = a;
      });
      if (!alertToMove) return;
      let startTop, startHeight;
      if (from === "closed") {
        startTop = closedRef.current?.getBoundingClientRect().top;
        startHeight = closedRef.current?.getBoundingClientRect().height;
      } else {
        startTop = ignoredRef.current?.getBoundingClientRect().top;
        startHeight = ignoredRef.current?.getBoundingClientRect().height;
      }
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const { top: endTop, height: endHeight } =
        activeRef.current?.getBoundingClientRect();
      // console.log(startTop, containerTop);
      const initalDis = startTop - containerTop + startHeight / 2;
      const finalDis = endTop - containerTop + endHeight / 2;
      alertToMove.initalDis = initalDis;
      alertToMove.finalDis = finalDis;
      setMovingAlert(alertToMove);
    };
    moveAlert();
  }, [from, isSimbian]);
  useEffect(() => {
    if (isSimbian) return;
    let count = 0;
    alerts.forEach((alert) => {
      if (alert.type === "active") count++;
    });
    if (count >= 3) {
      setTimeout(() => {
        setShowWithSimbian(true);
      }, 1500);
      return;
    }
    const interval = setInterval(() => {
      if (Math.random() < 0.5) {
        setFrom("ignored");
      } else {
        setFrom("closed");
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [alerts, isSimbian, setShowWithSimbian]);
  useEffect(() => {
    if (isSimbian) return;
    setCounts((prev) => {
      return {
        ...prev,
        [from]: prev[from] - 1,
        active: prev["active"] + 1,
      };
    });
  }, [from, isSimbian, setCounts]);
  const getIcons = (type) => alerts.filter((a) => a.type === type);

  return (
    <div
      className="relative h-[90vh] flex flex-col items-center justify-center gap-8  py-10 flex-1"
      ref={containerRef}
    >
      {movingAlert && (
        <motion.div
          key={movingAlert.id}
          initial={{ y: movingAlert.initalDis, opacity: 1 }}
          animate={{ y: movingAlert.finalDis, opacity: 0, x: -150 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1.5,
          }}
          className="absolute text-2xl top-0"
          onAnimationStart={() => {
            setAlerts((prev) => {
              const updated = prev.filter((a) => a.id !== movingAlert.id);
              const modifiedAlert = {
                id: movingAlert.id,
                icon: movingAlert.icon,
                type: "active",
              };
              updated.unshift(modifiedAlert);
              return updated;
            });
          }}
        >
          {movingAlert.icon}
        </motion.div>
      )}

      <VerticalAlertCard
        title="Ignored Alerts"
        ref={ignoredRef}
        icon={<BellOff className="text-red-600" />}
        count={counts.ignored}
        alerts={getIcons("ignored")}
        color="red"
        isSimbian={isSimbian}
      />
      <VerticalAlertCard
        title="Wrongly Closed"
        ref={closedRef}
        icon={<ShieldX className="text-yellow-600" />}
        count={counts.closed}
        alerts={getIcons("closed")}
        color="yellow"
        isSimbian={isSimbian}
      />
      <VerticalAlertCard
        title="Active Threats"
        ref={activeRef}
        icon={<ShieldAlert className="text-green-600" />}
        count={counts.active}
        alerts={getIcons("active")}
        color="red"
        isSimbian={isSimbian}
      />
    </div>
  );
};
export default AlertFlow;
