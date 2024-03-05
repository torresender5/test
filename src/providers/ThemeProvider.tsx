import { 
    Dispatch,
    SetStateAction,
    createContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react";

type Theme = 'light' | 'dark';

const usePrevious = (value: Theme) => {
    const ref = useRef<Theme>()
    useEffect(() => {
        ref.current = value;
    }, [value])
    return ref.current
}

const getIniialTheme = (key: string): Theme => {
    const storedTheme = window.localStorage.getItem(key) as Theme;
    if (storedTheme){
        return storedTheme;
    }
    return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

const useStorageTheme = (key: string): [Theme, Dispatch<SetStateAction<Theme>>] => {
    const [theme, setTheme] = useState<Theme>(getIniialTheme(key));

    useEffect(()=>{
        window.localStorage.setItem('theme', theme);
    }, [theme, setTheme]);

    return [theme, setTheme];

}

type ThemeContextProps = {
    theme: Theme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {console.log('thema cambiado')}
})

type ThemeProvider = {
    children: React.ReactNode
}

export const  ThemProvider = ({children}: ThemeProvider) => {
    const [theme, setTheme] = useStorageTheme("theme");

    const oldThme = usePrevious(theme);

    useLayoutEffect(() => {
        document.documentElement.classList.remove(oldThme as string);
        document.documentElement.classList.add(theme);
    }, [theme, oldThme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}