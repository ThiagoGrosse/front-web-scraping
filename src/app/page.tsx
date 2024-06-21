'use client';

import { useLoading } from '@/contexts/LogginProvider';
import { convertValue } from '@/helpers/convertValue';
import { useData } from '@/hooks/getAllData';
import { ChangeEvent, useEffect, useState } from 'react';
import { DataResponseType } from '@/types/DataResponse';
import { Paginate } from '@/components/Paginate/Paginate';
import { ItemsPerPage } from '@/components/Paginate/ItemsPerPage';
import {  SubmitHandler } from "react-hook-form";
import { SearchForm } from '@/components/Form/SearchForm';
import { InputSearch } from '@/types/InputSearch';

const Home = () => {
    const [perPage, setPerPage] = useState(10);
    const [page, setPage] = useState(1);
    const result = useData(perPage, page);
    const [onData, setOnData] = useState(false);
    const [data, setData] = useState<DataResponseType | undefined>(undefined);
    const [onError, setOnError] = useState(false);
    const [error, setError] = useState<DataResponseType | undefined>(undefined);
    const [totalPages, setTotalPages] = useState(0);
    const [currentGroup, setCurrentGroup] = useState<number[]>([]);
    const { setLoading } = useLoading();
    const groupPage = 3;

    useEffect(() => {
        if (result.data?.success) {
            setData(result.data);
            setOnData(true);
            setTotalPages(Math.round(result.data.countResult / perPage));
        } else if (!result.data?.success) {
            setOnError(true);
            setError(result.data);
            setOnData(false);
        }
        setLoading(false);
    }, [result]);

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

    const handleFormSearchSubmit: SubmitHandler<InputSearch> = (e) => {
        console.log("ok");
    };

    return (
        <div className='my-5'>
            {onData && (
                <SearchForm handleFormSearchSubmit={handleFormSearchSubmit} />
            )}

            {onData && (
                <ItemsPerPage handleSetPerPage={handleSetPerPage} page={page} totalPages={totalPages} />
            )}

            {onData && (
                data?.response.map(item => (
                    <div key={item.id} className='my-5 grid grid-cols-3 gap-4 shadow shadow-gray-600 bg-slate-800/40 rounded-md p-2 hover:bg-slate-800'>
                        <div>
                            {item.images.length > 0
                                ? <img src={item.images[0].url_img} alt={item.info[0].title} className='w-28 h-28 object-cover rounded-md' />
                                : <img src='/sem-foto.png' alt="Sem imagem" className='w-28 h-28 object-cover rounded-md' />}
                        </div>
                        <div className='text-sm col-span-2 flex flex-col justify-between'>
                            <h1 className='font-bold truncate-2-lines'>{item.info[0].title}</h1>
                            <div className='flex justify-between text-xs'>
                                <span>{item.store}</span>
                                <span className='font-bold'>{convertValue(item.info[0].value)}</span>
                            </div>
                            <button type="button" className='bg-indigo-600 rounded-md py-1 hover:bg-indigo-800'>Ver mais</button>
                        </div>
                    </div>
                ))
            )}
            {onError && (
                <div>
                    {error && "Nenhum registro encontrado!"}
                </div>
            )}
            {onData && (
                <Paginate
                    page={page}
                    totalPages={totalPages}
                    handleNextButton={handleNextButton}
                    handlePrevButton={handlePrevButton}
                    setPage={setPage}
                    currentGroup={currentGroup}
                />
            )}
        </div>
    );
};

export default Home;
