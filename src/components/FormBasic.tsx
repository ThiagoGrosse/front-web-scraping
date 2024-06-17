"use client";

import { useState } from "react";

type Props = {
    name: string;
    store: string;
    loading: boolean;
    getData: (url: string, store: string) => Promise<void>;
}

export const FormBasic = ({ name, store, loading , getData }: Props) => {
    const [url, setUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setUrl('');
        getData(url, store);
    };

    return (
        <div className="backdrop-blur-sm bg-indigo-400 text-white dark:bg-white/30 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-5 p-5 rounded-md text-center">
                <label htmlFor="url" className="text-2xl">{name}</label>
                <input
                    type="text"
                    name="url"
                    id="url"
                    placeholder="Insira o link aqui!"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="p-2 text-white rounded-md bg-background"
                />
                <button type='submit' className="bg-black py-2 rounded-md" disabled={loading}>Enviar</button>
            </form>
        </div>
    );
};