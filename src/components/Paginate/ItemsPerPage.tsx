import { Label } from "../ui/label"

type Props = {
    page: number,
    totalPages: number,
    handleSetPerPage: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export const ItemsPerPage = ({ page, totalPages, handleSetPerPage }: Props) => {

    return (
        <div className='flex justify-between gap-5 items-center text-gray-400 text-sm'>
            <div>
                <Label htmlFor='itemsPerPage' >Itens por página:</Label>
                <select
                    name="itemsPerPage"
                    id="itemsPerPage"
                    className='bg-transparent p-2 focus:bg-background focus:border-none group text-sm text-white'
                    onChange={handleSetPerPage}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div>
                <span>Página {page} de {totalPages}</span>
            </div>
        </div>
    )
}