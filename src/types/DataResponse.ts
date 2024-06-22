import { DataItemType } from "./DataItem";
import { ErrorResponse } from "./ErrorResponse";

export type DataResponseType = {
    success: boolean;
    countResult: number;
    page: number;
    limit: number;
    response: DataItemType[];
};