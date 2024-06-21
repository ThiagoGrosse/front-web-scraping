'use client'

import { LoadingScreen } from '@/components/LoadingScreen/LoaginScreen';
import { createContext, ReactNode, useContext, useState } from 'react';

interface LoadingContextProps {
    whileLoading: boolean;
    setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [whileLoading, setIsLoading] = useState(true);

    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };

    return (
        <LoadingContext.Provider value={{ whileLoading, setLoading }}>
            {whileLoading && (
                <LoadingScreen />
            )}
            {children}
        </LoadingContext.Provider>
    );
};