import {
  createContext,
  useContext,
  //   useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";


const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  const toggleTheme = () =>
    setThemeState((s) => (s === "dark" ? "light" : "dark"));

  //   const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setThemeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
