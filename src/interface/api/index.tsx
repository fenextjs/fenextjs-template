import { ErrorFenextjs } from 'fenextjs';

export interface IApiResult<T> {
    message: string;
    data: T;
}

export interface IApiError {
    message: string;
    error: ErrorFenextjs;
}

export type IApiRespond<T> = IApiResult<T> | IApiError;
