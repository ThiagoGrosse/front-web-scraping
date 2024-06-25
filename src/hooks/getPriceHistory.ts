import { api } from "@/lib/apiConfig";

export const getHistoryById = async (id: number) => {
    return await api.get(`/history/${id}`);
};
