import Link from "next/link";
import Navigation from "./navigation";
import DarkMode from "./dark-mode";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

export default function Header() {
    const theme = useServerDarkMode()
    return (
        <header className="flex justify-between md:items-center mt-4">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link href="/" className="text-xl font-mono text-white font-bold 
                    w-32 h-32 rounded-md bg-gradient-to-br
                     from-indigo-800 to-orange-400 dark:from-orange-500 dark:to-cyan-800 p-1">DD</Link>
                </div>
                <Navigation />
            </div>
            <div>
                <DarkMode defaultTheme={theme}/>
            </div>
        </header>
    )
}