import { useQuery } from "@tanstack/react-query";
import { DataResponseType } from "@/types/DataResponse";
import { api } from "@/lib/apiConfig";

const getData = async (
    perPage: number,
    page: number
): Promise<DataResponseType> => {
    const res = await api.get(`/infos?page=${page}&limit=${perPage}`);

    return res.data;
};

export const useData = (perPage: number, page: number) => {
    return useQuery({
        queryKey: ["getData", perPage, page],
        queryFn: () => getData(perPage, page),
    });
};
