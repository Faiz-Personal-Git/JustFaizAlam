
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const themes = [
  { id: "terracotta", name: "Burnt Sienna", color: "#B86645" },
  { id: "champagne", name: "Champagne Gold", color: "#B99A62" },
  { id: "emerald", name: "Deep Emerald", color: "#3F7565" },
  { id: "navy", name: "Midnight Navy", color: "#4D647D" },
  { id: "plum", name: "Royal Plum", color: "#806078" },
  { id: "espresso", name: "Espresso", color: "#795D4D" },
  { id: "charcoal", name: "Graphite", color: "#59615E" },
  { id: "rose", name: "Dusty Rose", color: "#A66F73" },
  { id: "white", name: "Pure White", color: "#FFFFFF" },
  { id: "black", name: "Midnight Black", color: "#111311" },
];

const themeTokens = {
  terracotta: {
    bg: "#100c0a",
    surface: "#19120f",
    surface2: "#241914",
    text: "#f5eee8",
    textSoft: "#d2c1b6",
    muted: "#a18b7e",
    mutedDark: "#706057",
    accentLight: "#e0a184",
    border: "rgba(255,220,200,.12)",
    borderHover: "rgba(184,102,69,.48)",
  },
  champagne: {
    bg: "#100e0a",
    surface: "#1b1710",
    surface2: "#272116",
    text: "#f7f0df",
    textSoft: "#d9ccb0",
    muted: "#a99b7d",
    mutedDark: "#74684f",
    accentLight: "#e5cd97",
    border: "rgba(232,211,164,.13)",
    borderHover: "rgba(185,154,98,.5)",
  },
  emerald: {
    bg: "#09100e",
    surface: "#101a16",
    surface2: "#17251f",
    text: "#edf6f0",
    textSoft: "#bfd2c7",
    muted: "#8ba99a",
    mutedDark: "#5e776a",
    accentLight: "#8fc2ad",
    border: "rgba(176,222,197,.12)",
    borderHover: "rgba(63,117,101,.55)",
  },
  navy: {
    bg: "#090d13",
    surface: "#111923",
    surface2: "#192432",
    text: "#edf2fa",
    textSoft: "#c3cedd",
    muted: "#91a0b5",
    mutedDark: "#5d6d81",
    accentLight: "#a8bfdc",
    border: "rgba(185,208,239,.12)",
    borderHover: "rgba(77,100,125,.55)",
  },
  plum: {
    bg: "#110b11",
    surface: "#1d141e",
    surface2: "#2a1c2b",
    text: "#f5edf5",
    textSoft: "#d4c1d5",
    muted: "#ad91ae",
    mutedDark: "#765f78",
    accentLight: "#d0a9ce",
    border: "rgba(225,190,225,.12)",
    borderHover: "rgba(128,96,120,.55)",
  },
  espresso: {
    bg: "#100c0a",
    surface: "#1b1410",
    surface2: "#291e17",
    text: "#f4ece4",
    textSoft: "#d4c1b1",
    muted: "#a78b77",
    mutedDark: "#735b4b",
    accentLight: "#d2ad91",
    border: "rgba(226,199,177,.12)",
    borderHover: "rgba(121,93,77,.55)",
  },
  charcoal: {
    bg: "#0c0f0e",
    surface: "#151a18",
    surface2: "#202623",
    text: "#eff3f0",
    textSoft: "#c5ccc7",
    muted: "#969f99",
    mutedDark: "#626b65",
    accentLight: "#b9c5bd",
    border: "rgba(207,220,211,.12)",
    borderHover: "rgba(89,97,94,.6)",
  },
  rose: {
    bg: "#120b0c",
    surface: "#1e1416",
    surface2: "#2b1d20",
    text: "#f8edef",
    textSoft: "#ddc4c8",
    muted: "#b18d94",
    mutedDark: "#795d63",
    accentLight: "#dfabb1",
    border: "rgba(240,200,209,.12)",
    borderHover: "rgba(166,111,115,.55)",
  },
  white: {
    bg: "#ffffff",
    surface: "#f7f7f5",
    surface2: "#eeeeeb",
    text: "#191917",
    textSoft: "#41413c",
    muted: "#696960",
    mutedDark: "#85857b",
    accentLight: "#77776e",
    border: "rgba(20,20,16,.12)",
    borderHover: "rgba(90,90,80,.4)",
  },
  black: {
    bg: "#050505",
    surface: "#0d0d0d",
    surface2: "#171717",
    text: "#f5f5f5",
    textSoft: "#c9c9c9",
    muted: "#999999",
    mutedDark: "#666666",
    accentLight: "#b9b9b9",
    border: "rgba(255,255,255,.11)",
    borderHover: "rgba(160,160,160,.45)",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("fa-theme");
      return themes.some((item) => item.id === savedTheme)
        ? savedTheme
        : "terracotta";
    } catch {
      return "terracotta";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = themes.find((item) => item.id === theme);
    const tokens = themeTokens[theme] || themeTokens.terracotta;

    root.dataset.theme = theme;
    root.style.colorScheme = theme === "white" ? "light" : "dark";

    const cssVariables = {
      "--bg": tokens.bg,
      "--surface": tokens.surface,
      "--surface-2": tokens.surface2,
      "--text": tokens.text,
      "--text-soft": tokens.textSoft,
      "--muted": tokens.muted,
      "--muted-dark": tokens.mutedDark,
      "--accent": selectedTheme.color,
      "--global-accent": selectedTheme.color,
      "--accent-light": tokens.accentLight,
      "--border": tokens.border,
      "--border-hover": tokens.borderHover,
    };

    Object.entries(cssVariables).forEach(([name, value]) => {
      root.style.setProperty(name, value);
    });

    try {
      localStorage.setItem("fa-theme", theme);
    } catch {
      // Theme still works for the current session.
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
