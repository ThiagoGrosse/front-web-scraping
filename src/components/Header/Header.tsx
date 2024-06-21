import { ThemeSelect } from "@/components/Header/ThemeSelect"
import { DropMenuHeader } from "@/components/Header/DropMenuHeader"

export const Header = () => {
    return (
        <header className="flex justify-between items-center h-20 border-b border-white max-w-[350px] relative lg:max-w-[980px]">
            <div className="text-[10px] relative">WEB<span className="text-xl absolute mt-1">Scraping</span></div>
            <div className="flex gap-5">
                <ThemeSelect />
                <DropMenuHeader />
            </div>
        </header>
    )
}