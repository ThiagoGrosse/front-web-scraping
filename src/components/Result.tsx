import { DataResult } from "@/types/dataResult"
import { useEffect, useState } from "react";

type Props = {
    data: DataResult;
    show: boolean;
}

export const Result = ({ data, show }: Props) => {

    const { informacoes, linksImage } = data.result;

    return (
        <div>
            {show && (
                <div className="mb-20">
                    <div className="flex justify-center py-6 items-center">
                        <h2 className="text-xl uppercase font-bold">Resultado da busca 🧐</h2>
                    </div>
                    <div className="flex gap-3 flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
                        {linksImage.map((link, index) => (
                            <img key={index} src={link} alt="imagem da api" className="rounded-lg border-2 border-gray-500 md:max-w-72" />
                        ))}
                    </div>
                    <div className="flex justify-center py-6 items-center">
                        <h2 className="text-xl uppercase font-bold">Informações</h2>
                    </div>
                    <div className="flex flex-col justify-between">
                        {informacoes.map((info, index) => (
                            <ul key={index}>
                                <li>{info}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            )}
            {!show && (
                <div className="flex justify-center items-center text-sm text-gray-400 h-40">
                    Nenhum dado a ser exibido
                </div>
            )}
        </div>
    );
}
