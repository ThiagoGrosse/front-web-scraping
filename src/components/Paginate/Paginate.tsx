'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
    page: number,
    totalPages: number,
    setPage: (page: number) => void,
    setPerPage: (perPage: number) => void
}

export const Paginate = ({ page, totalPages, setPage, setPerPage }: Props) => {
    const [currentGroup, setCurrentGroup] = useState<number[]>([]);
    const [groupPage, setGroupPage] = useState(3);

    useEffect(() => {
        var startPage = 0;
        var endpage = 0;

        totalPages < 3 && setGroupPage(2);

        if (groupPage === 2) {
            startPage = 1;
            endpage = 3;
        } else {
            if (page === 1) {
                startPage = 1;
                endpage = startPage + groupPage;
            } else if (page === totalPages) {
                startPage = totalPages - 2;
                endpage = totalPages + 1;
            } else {
                startPage = page - 1;
                endpage = startPage + groupPage;
            }
        }

        const newGroup = [];
        for (let i = startPage; i < endpage; i++) {
            newGroup.push(i);
        }

        setCurrentGroup(newGroup);
    }, [page, totalPages, groupPage]);

    const handlePrevButton = () => {
        if (page === 1) {
            setPage(1);
        } else {
            setPage(page - 1);
        }
    };

    const handleNextButton = () => {
        setPage(page + 1);
    };

    return (
        <div className='flex items-center justify-center'>
            <div className="flex justify-between items-center">
                <button
                    type="button"
                    onClick={handlePrevButton}
                    disabled={page === 1}
                    className='disabled:opacity-50'
                >
                    <ChevronLeft size={40} />
                </button>
                {currentGroup && currentGroup.map(item => (
                    <div
                        key={item}
                        className={`cursor-pointer border border-slate-800 bg-slate-600 text-white dark:border-white w-12 h-12 mx-2 rounded-md flex justify-center items-center dark:bg-slate-900 ${item === page && 'bg-slate-400 dark:bg-slate-600'}`}
                        onClick={() => setPage(item)}>
                        <span>{item}</span>
                    </div>
                ))}
                {totalPages > groupPage && page <= (totalPages - 3) && (
                    <>
                        <div className="h-12 w-12 flex items-end justify-center">
                            <span>...</span>
                        </div>
                        <div
                            className="cursor-pointer border border-slate-800 bg-slate-600 text-white dark:border-white w-12 h-12 mx-2 rounded-md flex justify-center items-center dark:bg-slate-900"
                            onClick={() => setPage(totalPages)}
                        >
                            <span>{totalPages}</span>
                        </div>
                    </>
                )}
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