import { convertValue } from "@/helpers/convertValue";
import { DataResponseType } from "@/types/DataResponse"
import Link from "next/link";

type Props = {
    data: DataResponseType | null;
}

export const Items = ({ data }: Props) => {

    return (
        <>
            {data?.response.map((item, index) => (
                <Link
                    href={`/${item.id}`}
                    key={index}
                    className="my-2 max-h-lg lg:my-2 p-2 flex bg-slate-600 hover:bg-slate-500 dark:bg-slate-900 rounded-md dark:hover:bg-slate-800" title="Clique para ver mais informações"
                >
                    <div className="min-w-32 xg:min-w-40 flex items-center">
                        {item.images.length > 0 && (
                            <img
                                src={item.images[0].url_img}
                                alt={item.info[0].title}
                                title={`Foto principal do anúncio: ${item.info[0].title}`}
                                className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-md"
                                loading="lazy"
                            />
                        )}
                        {item.images.length === 0 && (
                            <img
                                src="/sem-foto.png"
                                alt="Foto indisponível"
                                title="Foto indisponível"
                                className="w-28 h-28 object-cover rounded-md"
                                loading="lazy"
                            />
                        )}
                    </div>
                    <div className="flex flex-col justify-between lg:ml-2">
                        <div className="text-white">
                            <h1 className="font-bold truncate-2-lines text-sm mb-1">{item.info[0].title}</h1>
                        </div>
                        <ul className="text-sm lg:grid lg:gap-2 lg:grid-cols-2 sm:grid sm:grid-cols-2 text-slate-300 dark:text-slate-400">
                            <li className="flex flex-col text-xs">Imobiliária: <span className="text-sm font-bold text-white">{item.store}</span></li>
                            <li className="flex flex-col text-xs">Disponibilidade: <span className="text-sm font-bold text-white">{item.info[0].type_of_offer}</span></li>
                            <li className="flex col-span-2 items-center justify-center gap-2 mt-1 text-xs">Valor: <span className="text-sm font-bold text-white">{convertValue(item.info[0].value)}</span></li>
                        </ul>
                    </div>
                </Link>
            ))}
        </>
    )
}