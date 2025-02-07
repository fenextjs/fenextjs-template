import { ApiEndPoint } from '@/api/endpoint';
import { IApiResult, sleep } from 'fenextjs';

export default ApiEndPoint<IApiResult<{}>>(async (req, res) => {
    await sleep(2000);

    const respond: IApiResult<{}> = {
        data: {},
        message: 'Clientes Actualizados',
    };

    res.status(200).json(respond);
});
