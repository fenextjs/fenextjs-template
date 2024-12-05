import React from 'react';
import { Button, Title, Text, Box, Img, Link } from '@/ui-fenextjs';
export interface FenextjsInfoProps {}

export const FenextjsInfo = ({}: FenextjsInfoProps) => {
    return (
        <>
            <Box className="fenextjs-info">
                <Img src="https://fenextjs-doc.vercel.app/favicon.png" />
                <Title>Fenextjs</Title>
                <Text>
                    Gracias por usar Fenextjs. Esta plantilla tiene una
                    estructura que te ayudará a usar fenextjs.
                </Text>
                <Text>
                    Recuerda que puedes agregar todos los componentes de
                    fenextjs, que necesites, a la carpeta ui-fenextjs, para
                    personalizarlo en estilos o agregarle mas funcionalidades
                </Text>
                <Text>
                    Esta plantilla tiene un ejemplo de cómo crear un componente
                    de login y un sistema simple de traducciones.
                </Text>
                <Link href={'https://fenextjs-doc.vercel.app'} target="_blank">
                    <Button>Fenextjs Documentación</Button>
                </Link>
            </Box>
        </>
    );
};
