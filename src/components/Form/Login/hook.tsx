import { env_log, sleep, useAlert, useData, useNotification } from 'fenextjs';
import { IFormLogin } from './interface';
import { FormLoginValidator } from './validator';
import { useUser } from '@/hook/useUser';

export interface useFormLoginProps {
    defaultValue?: IFormLogin;
}

export const useFormLogin = ({ defaultValue }: useFormLoginProps) => {
    const { onLogin } = useUser({});
    const { pop } = useNotification({});
    const { setAlert, onClearAlert } = useAlert({});
    const HOOK = useData<IFormLogin>((defaultValue ?? {}) as IFormLogin, {
        validator: FormLoginValidator,
        onSubmitData: async (data) => {
            env_log(data, {
                name: 'DATA',
            });
            await sleep(2000);
        },
        onBeforeSubmitData: ({ isValid }) => {
            if (isValid != true) {
                setAlert({
                    message: isValid?.msg ?? isValid?.message ?? '',
                    type: 'WARNING',
                });
            }
        },
        onAfterSubmitDataOk: () => {
            pop({
                message: 'Login exitoso',
                type: 'OK',
            });
            onClearAlert();
            onLogin({
                id: '1',
                name: 'Name User',
                email: 'Email@user.com',
                token: 'token user',
            });
        },
        onAfterSubmitDataError: () => {
            setAlert({
                message: 'Login fallido',
                type: 'ERROR',
            });
        },
    });
    return {
        ...HOOK,
    };
};
