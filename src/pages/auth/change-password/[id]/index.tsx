import { FormChangePassword } from '@/components/Form/ChangePassword';
import { LayoutLogin } from '@/layout/Login';
import Head from 'next/head';
import { useRouter } from 'next/router';

export const PageChangePassword = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Cambiar Contraseña</title>
            </Head>
            <LayoutLogin>
                {router.isReady && (
                    <FormChangePassword
                        defaultValue={{
                            token: `${router?.query?.id ?? ''}`,
                            password: '',
                            repeactPassword: '',
                        }}
                    />
                )}
            </LayoutLogin>
        </>
    );
};

export default PageChangePassword;
