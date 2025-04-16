"use client";
import { useState } from "react";
import WithoutSimbian from "./sections/WithoutSimbian";
import { motion, AnimatePresence } from "framer-motion";
import WithSimbian from "./sections/WithSimbian";
import Navbar from "./components/Navbar";
const initialAlerts = [
  { id: "a1", type: "ignored", icon: "⚠️" },
  { id: "a2", type: "ignored", icon: "🧯" },
  { id: "a3", type: "ignored", icon: "🔒" },
  { id: "a4", type: "ignored", icon: "🔒" },
  { id: "a5", type: "ignored", icon: "🔒" },
  { id: "a6", type: "closed", icon: "📛" },
  { id: "a7", type: "closed", icon: "📛" },
  { id: "a8", type: "closed", icon: "📛" },
  { id: "a9", type: "closed", icon: "🐞" },
];
export default function Home() {
  const [showWithSimbian, setShowWithSimbian] = useState(false);
  const [alerts, setAlerts] = useState(initialAlerts);
  const [counts, setCounts] = useState({
    ignored: initialAlerts.filter((a) => a.type === "ignored").length,
    closed: initialAlerts.filter((a) => a.type === "closed").length,
    active: 0,
  });

  return (
    <main className="min-h-screen space-y-12">
      <Navbar />
      <AnimatePresence mode="wait">
        {!showWithSimbian ? (
          <motion.div
            key="without"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <WithoutSimbian
              alerts={alerts}
              counts={counts}
              setCounts={setCounts}
              setAlerts={setAlerts}
              setShowWithSimbian={setShowWithSimbian}
            />
          </motion.div>
        ) : (
          <motion.div
            key="with"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <WithSimbian
              alerts={alerts}
              counts={counts}
              setCounts={setCounts}
              setAlerts={setAlerts}
            />
            {/* <AlertFlow isSimbianFlow={showWithSimbian} /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
