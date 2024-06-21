'use client'

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from '../lib/queryClient';

interface Props {
    children: ReactNode;
}

const ReactQueryProvider = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
    </QueryClientProvider>
);

export default ReactQueryProvider;
