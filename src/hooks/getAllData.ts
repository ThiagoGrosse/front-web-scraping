import { api } from "@/lib/apiConfig";

export const getData = async (perPage: number, page: number) => {
    return await api.get(`/infos?page=${page}&limit=${perPage}`);
}