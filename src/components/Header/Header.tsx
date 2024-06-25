import { ThemeSelect } from "@/components/Header/ThemeSelect"
import { DropMenuHeader } from "@/components/Header/DropMenuHeader"
import Link from "next/link"

export const Header = () => {
    return (
        <div className="bg-slate-600 w-full dark:bg-background">
            <header className="bg-slate-600 dark:bg-background h-24 dark:border-b dark:border-white max-w-xs sm:max-w-md lg:max-w-3xl xl:max-w-4xl mx-auto">
                <div className="flex h-full justify-between items-center w-full">
                    <Link href={'/'} className="-mt-4 relative flex text-white">
                        <span className="text-[10px] relative">WEB
                            <span className="text-2xl absolute mt-1">Scraping
                            </span>
                        </span>
                    </Link>
                    <div className="flex gap-5">
                        <ThemeSelect />
                        <DropMenuHeader />
                    </div>
                </div>
            </header>
        </div>
    )
}