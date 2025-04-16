"use client";
import { Send } from "lucide-react";
import AlertFlow from "../components/AlertFlow";
import Steps from "../components/Steps";
import { alertSteps } from "../data/alerts";

export type Alert = {
  icon: string;
  id: string;
  type: string;
};

export default function WithoutSimbian({
  alerts,
  setAlerts,
  counts,
  setCounts,
  setShowWithSimbian,
}) {
  return (
    <section className="space-y-8 px-4 py-10 rounded-lg shadow-inner flex flex-col">
      <div className="self-end flex flex-col gap-4 items-end">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7187f7] text-right">
          Without Simbian
        </h2>
        <p className="text-[#7187f7] text-2xl">
          If this all sounds too familiar, you might want to.
        </p>
        <button className="rounded-4xl bg-white p-4 text-black w-fit flex items-center gap-2">
          Book a Demo <Send />
        </button>
      </div>
      <div className="flex justify-center">
        <Steps steps={alertSteps} />

        <AlertFlow
          alerts={alerts}
          counts={counts}
          setCounts={setCounts}
          setAlerts={setAlerts}
          setShowWithSimbian={setShowWithSimbian}
          isSimbian={false}
        />
      </div>
    </section>
  );
}
