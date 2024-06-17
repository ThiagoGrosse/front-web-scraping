import { ThemeToggle } from "@/components/theme";

export const Header = () => {

    return (
        <div className="flex justify-between items-center">
            <div className="block font-bold">
                <span className="absolute top-5 text-sm dark:text-green-400 text-gray-800">Web</span>
                <span className="absolute top-8 ml-5 text-2xl dark:text-yellow-400 text-black">Scraping</span>
            </div>
            <ThemeToggle />
        </div>
    )
}