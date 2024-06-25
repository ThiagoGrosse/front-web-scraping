import { DataItemType } from "./DataItem";

export type UniqueDataResponseType = {
    success: boolean;
    countResult: number;
    page: number;
    limit: number;
    response: DataItemType;
};
