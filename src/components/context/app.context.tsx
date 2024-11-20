import { createContext, useContext, useEffect, useState } from "react";


interface IAppContext {
    theme: TThemeContextType;
    setTheme: (v: TThemeContextType) => void;
}

type TThemeContextType = "light" | "dark";

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<TThemeContextType>(() => {
        const initialTheme = localStorage.getItem("theme") as TThemeContextType || "light";
        return initialTheme;
    });

    useEffect(() => {
        const mode = localStorage.getItem("theme") as TThemeContextType;
        if (mode) {
            setTheme(mode);
            document.documentElement.setAttribute('data-bs-theme', mode);
        }
    }, [])

    return (
        <AppContext.Provider value={{
            theme, setTheme
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useCurrentApp = () => {
    const currentAppContext = useContext(AppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp has to be used within <AppContext.Provider>"
        );
    }

    return currentAppContext;
};
