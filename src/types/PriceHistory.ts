export type PriceHistoryType = {
    success: string,
    countResult: number,
    response: [
        {
            id: number;
            id_item: number;
            price: number;
            created_at: string;
        }
    ]
}