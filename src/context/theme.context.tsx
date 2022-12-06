import React, {
  createContext,
  FC,
  ReactNode,
  useMemo,
  useState,
  useContext,
} from "react";

interface ThemeContextContextValues {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextContextValues>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const state = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
    }),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextContextValues => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("outside its scope");
  return ctx;
};
