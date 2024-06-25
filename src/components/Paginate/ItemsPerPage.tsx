import { Label } from "../ui/label"

type Props = {
    page: number,
    totalPages: number,
    handleSetPerPage: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export const ItemsPerPage = ({ page, totalPages, handleSetPerPage }: Props) => {

    return (
        <div className='h-full sm:flex sm:justify-center gap-5 items-center text-sm py-5 px-3'>
            <div>
                <Label htmlFor='itemsPerPage' >Itens por página:</Label>
                <select
                    name="itemsPerPage"
                    id="itemsPerPage"
                    className='ml-4 bg-background p-2 focus:bg-background focus:border-none group text-sm text-black dark:text-white rounded-md'
                    onChange={handleSetPerPage}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </div>
    )
}