import { ThemeSelect } from "@/components/Header/ThemeSelect"
import { DropMenuHeader } from "@/components/Header/DropMenuHeader"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex justify-between items-center h-24 border-b border-white w-full relative">
            <Link href={'/'} className="relative flex">
                <span className="text-[10px] relative">WEB
                    <span className="text-xl absolute mt-1">Scraping
                    </span>
                </span>
            </Link>
            <div className="flex gap-5">
                <ThemeSelect />
                <DropMenuHeader />
            </div>
        </header>
    )
}