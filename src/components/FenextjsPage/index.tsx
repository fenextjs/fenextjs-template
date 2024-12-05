import React, { ReactNode } from 'react';
import { Container } from '@/ui-fenextjs';
export interface FenextjsPageProps {
    children?: ReactNode;
}

export const FenextjsPage = ({ children }: FenextjsPageProps) => {
    return (
        <>
            <Container className="fenextjs-page">{children}</Container>
        </>
    );
};
