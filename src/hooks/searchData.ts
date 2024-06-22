import { api } from "@/lib/apiConfig";

export const searchData = async (
    perpage: number,
    page: number,
    searchTerm: string
) => {
    return await api.get(
        `/search?page=${page}&perpage=${perpage}&search=${encodeURIComponent(
            searchTerm
        )}`
    );
};
