import React from 'react';
import {
    Title as FenextjsTitle,
    TitleProps as FenextjsTitleProps,
} from 'fenextjs';


export interface TitleProps extends FenextjsTitleProps {
}
export const Title = ({
    children,
    className = '',
    ...props
}: TitleProps) => {
    return (
        <FenextjsTitle
            className={`my-project-title ${className}`}
            {...props}
        >
            {children}
        </FenextjsTitle>
    );
};
