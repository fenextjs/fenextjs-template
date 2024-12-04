import React from 'react';
import {
    Link as FenextjsLink,
    LinkProps as FenextjsLinkProps,
} from 'fenextjs';


export interface LinkProps extends FenextjsLinkProps {
}
export const Link = ({
    children,
    className = '',
    ...props
}: LinkProps) => {
    return (
        <FenextjsLink
            className={`my-project-Link ${className}`}
            {...props}
        >
            {children}
        </FenextjsLink>
    );
};
