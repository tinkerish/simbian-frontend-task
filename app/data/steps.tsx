import {
  AudioLines,
  BookX,
  Flame,
  LoaderCircle,
  MessageCircleWarning,
  SquareDashed,
  SquareStack,
  Workflow,
} from "lucide-react";

export const steps = [
  {
    image: <MessageCircleWarning />,
    id: "triaged",
    title: "Triaged & Reported",
    description: "The SOC Agent handled investigation and reporting.",
    icon: <SquareDashed />,
  },
  {
    image: <AudioLines />,
    id: "lessNoise",
    title: "Less noise",
    description: "90% of alerts resolved automatically, 24/7",
    icon: <Flame />,
  },
  {
    image: <BookX />,
    id: "holisticInsight",
    title: "Holistic insight",
    description: "Correlate alerts and your environment into the big picture",
    icon: <SquareStack />,
  },
  {
    image: <Workflow />,
    id: "adaptsAutomatically",
    title: "Adapts automatically",
    description:
      "No SOAR needed. Investigate every alert, including new ones, with best of Simbians knowledge and yours.",
    icon: <LoaderCircle />,
  },
];
