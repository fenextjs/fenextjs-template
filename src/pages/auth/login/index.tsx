import { FormLogin } from '@/components/Form/Login';
import { LayoutLogin } from '@/layout/Login';

export const PageLogin = () => {
    return (
        <>
            <LayoutLogin>
                <FormLogin />
            </LayoutLogin>
        </>
    );
};

export default PageLogin;
