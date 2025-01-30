
import { ApiEndPoint } from '@/api/endpoint';
import { useFilterDataProps } from '@/hook/useFilter';
import { IApiResult, IApiResultTable } from '@/interface/api';
import { IClient } from '@/interface/client';
import { sleep } from 'fenextjs';

export default ApiEndPoint<IApiResultTable<IClient>>(async (req, res) => {
    const query = (req?.query ?? {}) as useFilterDataProps 
    await sleep(2000);
    query;
    const items : IClient[] = [
        {
            id:"1",
            name:"Cliente 1",
            email:"client1@gmail.com",
            createdAt:new Date().toISOString()
        }
    ]

    const data : IApiResultTable<IClient> = {
        count:items.length,
        items
    }

    const respond : IApiResult<IApiResultTable<IClient>> = {
        data,
        message:"Clientes encontrados"
    }

    res.status(200).json(respond);
});
