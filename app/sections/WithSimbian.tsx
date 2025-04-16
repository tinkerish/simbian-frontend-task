"use client";
import AlertFlow from "../components/AlertFlow";
import { useEffect } from "react";
import { steps } from "../data/steps";
import Steps from "../components/Steps";

export default function WithSimbianPage({
  alerts,
  setAlerts,
  counts,
  setCounts,
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prevAlerts) => {
        if (prevAlerts.length === 0) return prevAlerts;

        const updatedAlerts = [...prevAlerts];
        updatedAlerts.shift();
        const newCounts = {
          active: 0,
          closed: 0,
          ignored: 0,
        };

        updatedAlerts.forEach((alert) => {
          if (newCounts[alert.type] !== undefined) {
            newCounts[alert.type]++;
          }
        });

        setCounts(newCounts);

        return updatedAlerts;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [setAlerts, setCounts]);
  return (
    <section className="space-y-8 px-4 py-10 rounded-lg shadow-inner flex flex-col">
      <div className="self-end flex flex-col gap-4 items-end">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7187f7] text-right">
          With Simbian
        </h2>
        <p className="text-[#7187f7] text-2xl">
          Relax Our AI Agents Will take From here
        </p>
      </div>
      <div className="flex justify-center">
        <Steps steps={steps} />
        <AlertFlow
          alerts={alerts}
          counts={counts}
          setCounts={setCounts}
          setAlerts={setAlerts}
          isSimbian={true}
        />
      </div>
    </section>
  );
}
