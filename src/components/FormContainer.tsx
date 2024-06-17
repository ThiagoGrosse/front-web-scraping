"use client"

import { useState } from "react";
import { getDataFarol, getDataJoris } from "@/api/requests";
import { FormBasic } from "@/components/FormBasic";
import { Result } from "@/components/Result";
import { DataResult } from "@/types/dataResult";

export const FormContainer = () => {
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dataResult, setDataResult] = useState<DataResult>({
        result: {
            infos: [],
            disponibilidade: '',
            valor: '',
            linksImage: [],
        }
    });

    const handleGetData = async (url: string, store: string) => {

        setLoading(true);

        try {
            let result;
            if (store === 'farol') {
                result = await getDataFarol(url);
            } else if (store === 'joris') {
                result = await getDataJoris(url);
            } else {
                alert('Nenhuma loja selecionada');
                return;
            }
            setDataResult(result);
            result && setShowResult(true);
        } catch (error) {
            console.error('Erro ao obter dados:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="mt-5 md:grid md:grid-cols-2 md:gap-10 md:my-5">
                <FormBasic name="Farol Imóveis" getData={handleGetData} store="farol" loading={loading} />
                <FormBasic name="Imobiliária Joris" getData={handleGetData} store="joris" loading={loading} />
            </div>
            <div className="w-full flex justify-center">
                <Result data={dataResult} show={showResult} />
            </div>
            {loading && (
                <div className="h-full w-full bg-black/50 absolute top-0 left-0">
                    <div className="flex justify-center items-center h-full">
                        <div className=" border-t-2 border-r-2 border-gray-300 rounded-full animate-spin w-20 h-20" />
                    </div>
                </div>
            )}
        </>
    )
}