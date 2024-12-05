import React from 'react';
import {
    Button,
    ErrorComponent,
    Form,
    InputPassword,
    InputText,
} from '@/ui-fenextjs';
import { useFormLogin } from './hook';
export interface FormLoginProps {}

export const FormLogin = ({}: FormLoginProps) => {
    const {
        data,
        onChangeData,
        validatorData,
        onSubmitData,
        loaderSubmit,
        dataError,
        isValidData,
    } = useFormLogin({});
    return (
        <>
            <Form className="form-login">
                <InputText
                    label="Correo"
                    placeholder="Correo"
                    defaultValue={data.email}
                    validator={validatorData?.email}
                    onChange={onChangeData('email')}
                />
                <InputPassword
                    label="Contraseña"
                    placeholder="Contraseña"
                    defaultValue={data.password}
                    validator={validatorData?.password}
                    onChange={onChangeData('password')}
                />
                {dataError && <ErrorComponent error={dataError} />}

                <Button
                    disabled={isValidData != true}
                    onClick={onSubmitData}
                    loader={loaderSubmit}
                    full={true}
                >
                    Enviar
                </Button>
            </Form>
        </>
    );
};
