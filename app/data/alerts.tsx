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
export const alertSteps = [
  {
    image: <MessageCircleWarning />,
    id: "falsePositives",
    title: "False positives",
    description: "Wasting valuable analyst time on false positives",
    icon: <SquareDashed />,
  },
  {
    image: <AudioLines />,
    id: "moreNoise",
    title: "More noise",
    description: "Processing one alert at a time, missing the big picture",
    icon: <Flame />,
  },
  {
    image: <BookX />,
    id: "lessTime ",
    title: "Less time",
    description: "More time fixing SOAR automation, less time on real threats",
    icon: <SquareStack />,
  },
  {
    image: <Workflow />,
    id: "unhandledAlerts",
    title: "Unhandled alerts",
    description: "Every alert, including new ones, worst.",
    icon: <LoaderCircle />,
  },
];
