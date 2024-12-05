import React from 'react';
import { Container, InputRadio } from '@/ui-fenextjs';
import { useLang } from '@/languages';
export interface ChangeLangProps {}

export const ChangeLang = ({}: ChangeLangProps) => {
    const { setCurrentLang, currentLang } = useLang();
    return (
        <>
            <Container className="change-lang">
                <InputRadio<'es' | 'en'>
                    defaultValue={{
                        id: currentLang ?? 'es',
                        data: currentLang ?? 'es',
                        label: (currentLang ?? 'es')?.toUpperCase(),
                    }}
                    items={[
                        {
                            id: 'es',
                            data: 'es',
                            label: 'ES',
                        },
                        {
                            id: 'en',
                            data: 'en',
                            label: 'EN',
                        },
                    ]}
                    onChange={(e) => {
                        setCurrentLang(e?.data);
                    }}
                />
            </Container>
        </>
    );
};
