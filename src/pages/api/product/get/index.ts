import { ApiEndPoint } from '@/api/endpoint';
import { IApiQuery, IApiResultTable } from '@/interface/api';
import { IProduct } from '@/interface/product';
import { IStatus } from '@/interface/status';
import { IApiResult, parseNumber, sleep } from 'fenextjs';

export default ApiEndPoint<IApiResultTable<IProduct>>(async (req, res) => {
    const { search, status, ...query } = (req?.query ?? {}) as IApiQuery;

    const npage = parseNumber(query?.npage ?? 10);
    const page = parseNumber(query?.page ?? 0);

    await sleep(2000);

    const count = 50;

    const items: IProduct[] = new Array(count)
        .fill(1)
        .map((_, i) => {
            const r: IProduct = {
                id: `${i}`,
                name: 'Producto ' + i,
                description:"Descripcion "+i,
                price: 100 * (i +1),
                image:"",
                status: Object.values(IStatus)[i % 3],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            return r;
        })
        .filter((e) => {
            if (search) {
                return (
                    e?.name?.toLowerCase().includes(search.toLowerCase()) ||
                    search?.toLowerCase().includes(e?.name.toLowerCase())
                );
            }
            if (status) {
                return e?.status == status;
            }
            return true;
        })
        .slice(page * npage, (page + 1) * npage);

    const data: IApiResultTable<IProduct> = {
        count,
        items,
    };

    const respond: IApiResult<IApiResultTable<IProduct>> = {
        data,
        message: 'Productos encontrados',
    };

    res.status(200).json(respond);
});
