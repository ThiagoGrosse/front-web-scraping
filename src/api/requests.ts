import { api } from "@/utils/api";

export const getDataFarol = async (url: string) => {
    const res = await api.post("/imobiliaria-farol", {
        url: url,
    });

    return res.data;
};

export const getDataJoris = async (url: string) => {
    const res = await api.post("/imobiliaria-joris", {
        url: url,
    });

    return res.data;
};
