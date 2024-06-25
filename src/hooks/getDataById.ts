import { api } from "@/lib/apiConfig";

export const getDataById = async (id: number) => {
    return await api.get(`/infos/${id}`);
};
