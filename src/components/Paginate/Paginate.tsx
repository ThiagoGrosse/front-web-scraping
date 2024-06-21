import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
    page: number,
    totalPages: number,
    handleNextButton: () => void,
    handlePrevButton: () => void,
    setPage: (page: number) => void,
    currentGroup: number[] | undefined,
}

export const Paginate = ({ page, totalPages, handleNextButton, handlePrevButton, setPage, currentGroup }: Props) => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <div className="flex justify-between gap-5">
                <button
                    type="button"
                    onClick={handlePrevButton}
                    disabled={page === 1}
                    className='disabled:opacity-50'
                >
                    <ChevronLeft />
                </button>
                {currentGroup && currentGroup.map(item => (
                    <div
                        key={item}
                        className={`border border-white py-1 px-2 rounded-md flex items-center ${item === page && 'bg-slate-700'}`}
                        onClick={() => setPage(item)}>
                        <span>{item}</span>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleNextButton}
                    disabled={page === totalPages}
                    className='disabled:opacity-50'
                >
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    )
}