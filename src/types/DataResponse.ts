import { DataItemType } from "./DataItem";

export type DataResponseType = {
    success: boolean;
    countResult: number;
    page: number;
    limit: number;
    response: DataItemType[];
};