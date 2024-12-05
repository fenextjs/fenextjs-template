import {
    env_log,
    ErrorFenextjs,
    sleep,
    useData,
    useNotification,
} from 'fenextjs';
import { IFormLogin } from './interface';
import { FormLoginValidator } from './validator';

export interface useFormLoginProps {
    defaultValue?: IFormLogin;
}

export const useFormLogin = ({
    defaultValue = {
        email: '',
        password: '',
    },
}: useFormLoginProps) => {
    const { pop } = useNotification({});
    const HOOK = useData<IFormLogin>(defaultValue, {
        validator: FormLoginValidator,
        onSubmitData: async (data) => {
            env_log(data, {
                name: 'DATA',
            });
            await sleep(2000);
            if (parseInt(`${Math.random() * 10}`) % 2 === 0) {
                throw new ErrorFenextjs({
                    message: 'Error',
                });
            }
        },
        onAfterSubmitDataOk: () => {
            pop({
                message: 'Login exitoso',
                type: 'OK',
            });
        },
        onAfterSubmitDataError: () => {
            pop({
                message: 'Login fallido',
                type: 'ERROR',
            });
        },
    });
    return {
        ...HOOK,
    };
};
