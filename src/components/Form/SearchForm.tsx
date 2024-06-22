'use client'

import { InputSearch } from "@/types/InputSearch";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";
import { DataResponseType } from "@/types/DataResponse";
import { useLoading } from "@/contexts/LogginProvider";
import { ErrorResponse } from "@/types/ErrorResponse";
import { searchData } from "@/hooks/searchData";
import { useEffect, useState } from "react";

type Props = {
    perPage: number,
    setPage: (page: number) => void,
    setDataSearch: (data: DataResponseType | null) => void,
    setDataError: (dataError: ErrorResponse | null) => void,
    setTotalPage: (totalPage: number) => void,
}

export const SearchForm = ({ perPage, setPage, setDataError, setDataSearch,setTotalPage }: Props) => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm<InputSearch>();
    const [searchValue, setSearchValue] = useState('');
    const { setLoading } = useLoading();

    useEffect(() => {
        if (searchValue.length === 0) {
            handleClearSearch();
        }
    }, [searchValue]);
        
    const handleFormSearchSubmit: SubmitHandler<InputSearch> = async (e) => {
        setLoading(true);
        const searchTerm = e.search;

        try {
            const res = await searchData(perPage, 1, searchTerm);

            if (res.data.success) {
                setDataSearch(res.data);
                setTotalPage(Math.round(res.data.countResult / perPage));
                setPage(1);
            } else {
                setDataError(res.data);
            }

        } catch (error) {
            setDataError({ success: false, error: "Not found", response: { Error: "Nenhum registro encontrado!" } });
        } finally {
            setLoading(false);
        }
    }

    const handleClearSearch = () => {
        setSearchValue('');
        reset({ search: '' });
        setDataError(null);
        setDataSearch(null);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSearchSubmit)}>
            <div className="flex items-center">
                <div className="relative w-full">
                    <Controller
                        control={control}
                        name='search'
                        defaultValue=""
                        rules={{ required: "Campo obrigatório", minLength: { value: 4, message: "Mínimo de 4 caracteres" }, maxLength: { value: 100, message: "Máximo de 100 caracteres" } }}
                        render={({ field, fieldState }) => (
                            <Input
                                {...field}
                                value={field.value}
                                placeholder="Buscar..."
                                onChange={(e) => {
                                    field.onChange(e);
                                    setSearchValue(e.target.value);
                                }}
                                aria-invalid={errors.search ? "true" : "false"}
                                style={{ border: fieldState.invalid ? '1px solid red' : '1px solid #fff' }}
                            />

                        )}
                    />
                </div>
                {searchValue && (
                    <button
                        type="button"
                        className="absolute right-24"
                        onClick={handleClearSearch}
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                )}
                <Button type="submit" className='ml-2 bg-transparent text-white active:bg-slate-800 hover:bg-slate-700'>
                    <Search />
                </Button>
            </div>
            {errors.search && (
                <p className="text-red-400 text-sm mt-2 -mb-4">{errors.search.message}</p>
            )}
        </form>
    );
};
