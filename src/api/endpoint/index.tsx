import { ErrorFenextjs, IApiRespond } from 'fenextjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Inicializar el middleware

function initMiddleware(middleware: any) {
    return (req: any, res: any) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result: any) => {
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
}
const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS'],
        origin: '*', // o un array con múltiples orígenes
        credentials: true,
    }),
);

export const ApiEndPoint =
    <T,>(
        endpoint: (
            req: NextApiRequest,
            res: NextApiResponse<IApiRespond<T>>,
        ) => Promise<void>,
    ) =>
    async (req: NextApiRequest, res: NextApiResponse<IApiRespond<T>>) => {
        try {
            await cors(req, res);
            await endpoint(req, res);
        } catch (err: any) {
            const error: ErrorFenextjs = err;
            res.status(500).json({ error, message: error?.msg ?? '' });
        }
    };
