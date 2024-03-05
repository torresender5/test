import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";



const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className="bg-slate-50 dark:bg-slate-900 w-full h-20 top-0 right-0 left-0">
            <div className="flex justify-end p-2">
                <button 
                className="bg-violet-600 hover:bg-violet-700 text-slate-50 py-2 px-2 border-r-cyan-200 rounded-md"
                onClick={toggleTheme}
                >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
            </div>
        
        </div>
    )

}
export default Navbar;