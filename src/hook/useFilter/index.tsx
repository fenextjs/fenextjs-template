
import {  useFilter as useFilterFenextjs,useFilterProps as useFilterFenextjsProps, SearchDataProps,DateDataProps } from 'fenextjs';

export interface useFilterDataProps extends SearchDataProps ,DateDataProps {
    
}

export interface useFilterProps extends useFilterFenextjsProps<useFilterDataProps>{}

export const useFilter = ({...props}: useFilterProps) => {
    const HOOK= useFilterFenextjs<useFilterDataProps>({
        ...props
    });
    return {
        ...HOOK,
        data:HOOK?.data as useFilterDataProps
    }
};
