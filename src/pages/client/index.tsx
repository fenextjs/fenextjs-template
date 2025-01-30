import { useQueryClient } from '@/api/client/query';
import { LayoutDashboard } from '@/layout/Dashboard';

export const PageClient = () => {
    const {data,isLoading,error} = useQueryClient({})
    return (
        <>
            <LayoutDashboard>
                {JSON.stringify(data)}
            </LayoutDashboard>
        </>
    );
};

export default PageClient;
