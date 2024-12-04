import React from 'react';
import {
    Button as FenextjsButton,
    ButtonProps as FenextjsButtonProps,
} from 'fenextjs';


export interface ButtonProps extends FenextjsButtonProps {
}
export const Button = ({
    children,
    className = '',
    ...props
}: ButtonProps) => {
    return (
        <FenextjsButton
            className={`my-project-btn ${className}`}
            {...props}
        >
            {children}
        </FenextjsButton>
    );
};
