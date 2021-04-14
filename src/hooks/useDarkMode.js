import useLocalStorage from "./useLocalStorage";

function useDarkMode (){
    const [darkMode, setDarkMode] = useLocalStorage("dark mode")
    return [darkMode, setDarkMode]
}
export default useDarkMode