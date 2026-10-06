import {
  Layers,
  FlaskConical,
  Landmark,
  Globe2,
  Trees,
  Search,
  Compass,
  Cpu,
  Users,
  Newspaper,
} from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All Topics",
    icon: Layers,
  },
  {
    id: "science",
    name: "Science",
    icon: FlaskConical,
  },
  {
    id: "history",
    name: "History",
    icon: Landmark,
  },
  {
    id: "geopolitics",
    name: "Geopolitics",
    icon: Globe2,
  },
  {
    id: "environment",
    name: "Environment",
    icon: Trees,
  },
  {
    id: "mysteries",
    name: "Mysteries",
    icon: Search,
  },
  {
    id: "survival-stories",
    name: "Survival Stories",
    icon: Compass,
  },
  {
    id: "tech",
    name: "Tech",
    icon: Cpu,
  },
  {
    id: "society",
    name: "Society",
    icon: Users,
  },
  {
    id: "current-affairs",
    name: "Current Affairs",
    icon: Newspaper,
  },
];

export default categories;