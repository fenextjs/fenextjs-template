import { useQueryClient } from '@/api/client/query';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableClient } from '@/table/client';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';

export const PageClient = () => {
    const { data, isLoading, error } = useQueryClient({});
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Title>Clientes</Title>
                            <Text>Aqui puedes mirar tus clientes.</Text>
                        </>
                    }
                >
                    <TableClient
                        items={data?.data?.items}
                        nItems={data?.data?.count}
                        loader={isLoading}
                        error={error?.error}
                    />
                </LayoutTable>
            </LayoutDashboard>
        </>
    );
};

export default PageClient;
