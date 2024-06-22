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
    const groupPage = 3;

    useEffect(() => {
        var startPage = 0;
        var endpage = 0;

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

        const newGroup = [];
        for (let i = startPage; i < endpage; i++) {
            newGroup.push(i);
        }

        setCurrentGroup(newGroup);
    }, [page, totalPages, groupPage]);

    const handlePrevButton = () => {
        setPage(page === 0 ? 0 : 1);
    };

    const handleNextButton = () => {
        setPage(page + 1);
    };

    const handleSetPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
        const newPerPage = event.target.value;
        setPerPage(parseInt(newPerPage));
    };

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