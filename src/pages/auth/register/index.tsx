import { FormRegister } from '@/components/Form/Register';
import { LayoutLogin } from '@/layout/Login';

export const PageRegister = () => {
    return (
        <>
            <LayoutLogin>
                <FormRegister />
            </LayoutLogin>
        </>
    );
};

export default PageRegister;
