'use client'

import { InputSearch } from "@/types/InputSearch";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

type Props = {
    handleFormSearchSubmit: SubmitHandler<InputSearch>;
};

export const SearchForm = ({ handleFormSearchSubmit }: Props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<InputSearch>();

    return (
        <form onSubmit={handleSubmit(handleFormSearchSubmit)}>
            <div className="flex gap-4">
                <Controller
                    control={control}
                    name='search'
                    defaultValue=""
                    rules={{ required: "Campo obrigatório", minLength: { value: 4, message: "Mínimo de 4 caracteres" }, maxLength: { value: 100, message: "Máximo de 100 caracteres" } }}
                    render={({ field, fieldState }) => (
                        <Input
                            {...field}
                            aria-invalid={errors.search ? "true" : "false"}
                            style={{ border: fieldState.invalid ? '1px solid red' : '1px solid #fff' }}
                        />
                    )}
                />
                <Button type="submit" className='bg-transparent text-white active:bg-slate-800 hover:bg-slate-700'>
                    <Search />
                </Button>
            </div>
        </form>
    );
};
