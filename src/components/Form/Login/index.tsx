import React from 'react';
import { useFormLogin } from './hook';
import { Form } from '@/ui-fenextjs/Form';
import { InputPassword, InputText } from '@/ui-fenextjs/Input';
import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';
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
                <Title>Entrar</Title>
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
                    onClickDisabled={onSubmitData}
                    loader={loaderSubmit}
                    full={true}
                    isBtn={false}
                >
                    Enviar
                </Button>
            </Form>
        </>
    );
};
