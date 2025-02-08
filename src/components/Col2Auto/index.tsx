import React, { ReactNode } from 'react';
export interface Col2AutoProps {
    children?: ReactNode;
}

export const Col2Auto = ({ children }: Col2AutoProps) => {
    return (
        <>
            <div className="col-2-auto">{children}</div>
        </>
    );
};
