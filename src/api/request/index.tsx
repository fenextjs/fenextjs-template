import { useUser } from '@/hook/useUser';
import { IApiError, IApiResult } from '@/interface/api';
import { useMutation } from '@tanstack/react-query';

export interface useRequestCallbackProps<R> {
    onSuccess?: (data: IApiResult<R>) => void;
    onError?: (error: IApiError) => void;
}
export interface useRequestProps<R> extends useRequestCallbackProps<R> {
    url: string;
    options?: RequestInit;
}

export const useRequest = <I, R>({
    url,
    onSuccess,
    onError,
    options,
}: useRequestProps<R>) => {
    const { user } = useUser({});

    const onRequest = async (input: I): Promise<IApiResult<R>> => {
        const response = await fetch(url, {
            method: 'POST',
            ...options,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${user?.token}`,
                ...options?.headers,
            },
            body: JSON.stringify(input),
        });
        const data = await response.json();
        if (data?.error) {
            throw data;
        }
        return data;
    };

    return useMutation<IApiResult<R>, IApiError, I>({
        mutationFn: onRequest,
        onSuccess,
        onError,
    });
};
