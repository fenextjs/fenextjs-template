import { ApiEndPoint } from '@/api/endpoint';
import { IApiQuery, IApiResult, IApiResultTable } from '@/interface/api';
import { IClient } from '@/interface/client';
import { sleep } from 'fenextjs';

export default ApiEndPoint<IApiResultTable<IClient>>(async (req, res) => {
    const {
        npage = 10,
        page = 0,
        search
    } = (req?.query ?? {}) as IApiQuery;
    await sleep(2000);
    const items: IClient[] = new Array(50).fill(1).map((_, i) => {
        return {
            id: `${i}`,
            name: 'Cliente ' + i,
            email: `client${i}@gmail.com`,
            createdAt: new Date().toISOString(),
        };
    }).filter((e)=>{
        if(search){
            return e?.name?.toLowerCase().includes(search.toLowerCase()) || search?.toLowerCase().includes(e?.name.toLowerCase())
        }
        return true
    }).slice(page * npage , (page + 1) * npage);

    

    const data: IApiResultTable<IClient> = {
        count: items.length,
        items,
    };

    const respond: IApiResult<IApiResultTable<IClient>> = {
        data,
        message: 'Clientes encontrados',
    };

    res.status(200).json(respond);
});
