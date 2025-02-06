import React, { ReactNode } from 'react';
export interface Col1frAutoProps {
    children?: ReactNode;
}

export const Col1frAuto = ({ children }: Col1frAutoProps) => {
    return (
        <>
            <div className="col-1fr-auto">{children}</div>
        </>
    );
};
