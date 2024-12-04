import React from 'react';
import {
    Text as FenextjsText,
    TextProps as FenextjsTextProps,
} from 'fenextjs';


export interface TextProps extends FenextjsTextProps {
}
export const Text = ({
    children,
    className = '',
    ...props
}: TextProps) => {
    return (
        <FenextjsText
            className={`my-project-text ${className}`}
            {...props}
        >
            {children}
        </FenextjsText>
    );
};
