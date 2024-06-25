'use client';

import { SearchForm } from "@/components/Form/SearchForm";
import { Items } from "@/components/Items/Items";
import { ItemsPerPage } from "@/components/Paginate/ItemsPerPage";
import { Paginate } from "@/components/Paginate/Paginate";
import { useLoading } from "@/contexts/LogginProvider";
import { getData } from "@/hooks/getAllData";
import { DataResponseType } from "@/types/DataResponse";
import { ErrorResponse } from "@/types/ErrorResponse";
import { Frown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalPages, setTotalPage] = useState(0);
    const [data, setData] = useState<DataResponseType | null>(null);
    const [dataSearch, setDataSearch] = useState<DataResponseType | null>(null);
    const [dataError, setDataError] = useState<ErrorResponse | null>(null);
    const { setLoading } = useLoading();

    useEffect(() => {
        const getDataResponse = async () => {
            try {
                const res = await getData(perPage, page);
                if (res.data.success) {
                    setData(res.data);
                    setTotalPage(Math.round(res.data.countResult / perPage));
                } else {
                    setDataError(res.data);
                }
            } catch (error) {
                setDataError({
                    success: false,
                    error: "Not found",
                    response: {
                        Error: "Ocorreu um erro, não foi possível carregar os dados."
                    }
                });
            } finally {
                setLoading(false);
            }
        };

        getDataResponse();

    }, [perPage, page])

    const handleSetPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPerPage(parseInt(e.target.value));
    }

    return (
        <div className='my-6 lg:grid lg:grid-cols-2 gap-5 items-center'>
            {!dataError && data?.success && data?.response.length > 0 && (
                <div className="mb-20 lg:mb-4 h-20 col-span-2 lg:grid lg:grid-cols-3">

                    <div className="bg-slate-600 dark:bg-slate-900 rounded-md lg:col-span-2">
                        <SearchForm
                            perPage={perPage}
                            setPage={setPage}
                            setDataSearch={setDataSearch}
                            setDataError={setDataError}
                            setTotalPage={setTotalPage}
                        />
                    </div>

                    <ItemsPerPage
                        handleSetPerPage={handleSetPerPage}
                        page={page}
                        totalPages={totalPages}
                    />
                </div>
            )}

            {!dataError && dataSearch?.success && dataSearch?.response.length > 0 && (
                <Items data={dataSearch} />
            )}

            {!dataSearch?.success && !dataError && data?.success && data?.response.length > 0 && (
                <Items data={data} />
            )}

            {!dataError && data?.success && data?.response.length > 0 && (
                <div className="mt-6 col-span-2">
                    <Paginate page={page} setPage={setPage} setPerPage={setPerPage} totalPages={totalPages} />
                </div>
            )}

            {dataError && (
                <div className="w-full flex justify-center items-center h-[200px]">
                    <div className="flex flex-col">
                        <span className="w-full flex justify-center items-center gap-2 mb-4 text-2xl">Ops! <Frown size={40} /> </span>
                        <p className="text-sm">{dataError.response.Error}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
