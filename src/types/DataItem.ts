import { ImageType } from "./Image";
import { InfoType } from "./Info";

export type DataItemType = {
    id: number;
    url: string;
    store: string;
    created_at: string;
    updated_at: string;
    info: InfoType[];
    images: ImageType[];
};
