'use client';

import { ImagesFullScreen } from "@/components/Modals/ImagesFullScreen";
import { PriceHistory } from "@/components/Modals/PriceHistory";
import { Button } from "@/components/ui/button";
import { useLoading } from "@/contexts/LogginProvider"
import { convertValue } from "@/helpers/convertValue";
import { getDataById } from "@/hooks/getDataById";
import { getHistoryById } from "@/hooks/getPriceHistory";
import { ErrorResponse } from "@/types/ErrorResponse";
import { PriceHistoryType } from "@/types/PriceHistory";
import { UniqueDataResponseType } from "@/types/UniqueDataResponse";
import { Link } from "lucide-react";
import { useEffect, useState } from "react"

type Props = {
    params: {
        id: string
    }
}
export default function Page({ params }: Props) {
    const [data, setData] = useState<UniqueDataResponseType | null>(null);
    const [dataError, setDataError] = useState<ErrorResponse | null>(null);
    const [details, setDetails] = useState<string[]>([]);
    const [dataHistory, setDataHistory] = useState<PriceHistoryType | null>(null);
    const [errorHistory, setErrorHistory] = useState<ErrorResponse | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
    const [indexImg, setIndexImg] = useState(0);

    const { id } = params
    const { setLoading } = useLoading();


    useEffect(() => {
        const getDataResponse = async () => {
            try {
                const res = await getDataById(parseInt(id));
                if (res.data.success) {
                    setData(res.data);
                    setDetails(JSON.parse(res.data.response.info[0].details));
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

        const getDataHistory = async () => {
            try {
                const res = await getHistoryById(parseInt(id));
                if (res.data.success) {
                    setDataHistory(res.data);
                }
            } catch (error) {
                setErrorHistory({
                    success: false,
                    error: "Not found",
                    response: {
                        Error: "Ocorreu um erro, não foi possível carregar os dados."
                    }
                });
            }
        }

        getDataResponse();
        getDataHistory();

    }, [])

    const handleImageOpen = (index: number) => {
        setImageOpen(true);
        setIndexImg(index)
    }

    const nextImage = () => {
        if (data?.success) {
            setIndexImg((indexImg) => (indexImg + 1) % data.response.images.length);
        }
    }

    const prevImage = () => {
        if (data?.success) {
            setIndexImg((indexImg) => (indexImg + 1) % data.response.images.length);
        }
    }

    return (
        <div>
            {/* Título */}
            <div className="my-4 flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-between item-center">
                    <h1 className="font-bold text-3xl mb-2">{data?.response.info[0].title}</h1>
                    {data?.response.info[0] && (
                        <p className="font-bold text-2xl">{convertValue(data?.response.info[0].value)}</p>
                    )}
                </div>
                <div className="flex justify-between items-center my-4 lg:flex-col lg:gap-4">
                    <a href={data?.response.url} className="flex gap-2" target="_blank">Ver anúncio <Link /></a>
                    <Button type="button" onClick={() => setModalOpen(true)}>Ver histórico de preço</Button>
                </div>
            </div>

            {/* Detalhes */}
            <div className="my-2 lg:grid lg:grid-cols-2 lg:justify-around">
                <div className="text-sm text-gray-500 my-6">
                    <ul className="flex justify-between items-center lg:flex-col lg:items-start">
                        <li className="flex flex-col">Imobiliária: <span className="font-bold text-black dark:text-white text-lg">{data?.response.info[0].real_state}</span></li>
                        <li className="flex flex-col">Disponibilidade: <span className="font-bold text-black dark:text-white text-lg">{data?.response.info[0].type_of_offer}</span></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col text-sm text-black dark:text-white my-4">
                        <span className="font-bold text-base">Detalhes:</span>
                        {details && details.length > 0 && details.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Imagens */}
            <div className="my-6">
                <span className="text-black font-bold">Imagens:</span>
                <div className="grid grid-cols-2 gap-4 my-2">

                    {data?.response.images && data?.response.images.length > 0 && data?.response.images.map((img, index) => (
                        <img
                            key={index}
                            src={img.url_img}
                            alt={data.response.info[0].title}
                            title={data.response.info[0].title}
                            className="object-cover rounded"
                            onClick={() => handleImageOpen(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Histórico de preço */}
            {modalOpen && (
                <PriceHistory dataHistory={dataHistory} errorHistory={errorHistory} title={data?.response.info[0].title || ""} setModalOpen={setModalOpen} />
            )}

            {/* Modal Imagem Full Screen */}
            {imageOpen && data?.response.images && (
                <ImagesFullScreen urlImg={data.response.images[indexImg].url_img} nextImage={nextImage} prevImage={prevImage} setImageOpen={setImageOpen} />
            )}
        </div>
    )
}