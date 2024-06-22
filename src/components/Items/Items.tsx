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
                <Link href={`/${item.id}`} key={index} className="my-6 p-2 flex bg-slate-900 rounded-md gap-4 hover:bg-slate-800" title="Clique para ver mais informações">
                    <div className="min-w-32">
                        {item.images.length > 0 && (
                            <img src={item.images[0].url_img} alt={item.info[0].title} title={`Foto principal do anúncio: ${item.info[0].title}`} className="w-28 h-28 object-cover rounded-md" />
                        )}
                        {item.images.length === 0 && (
                            <img src="/sem-foto.png" alt="Foto indisponível" title="Foto indisponível" className="w-28 h-28 object-cover rounded-md" />
                        )}
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="font-bold truncate-2-lines">{item.info[0].title}</h1>
                        </div>
                        <ul className="text-sm">
                            <li>{item.store}</li>
                            <li>Para: {item.info[0].type_of_offer}</li>
                            <li className="mt-2">{convertValue(item.info[0].value)}</li>
                        </ul>
                    </div>
                </Link>
            ))}
        </>
    )
}