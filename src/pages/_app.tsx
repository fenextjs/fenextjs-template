import '../../styles/index.css';
import type { AppProps } from 'next/app';
import { NotificationPop, useHistory } from 'fenextjs';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    useHistory({});
    return (
        <>
            <Head>
                <title>¡Bienvenido a Fenextjs!</title>
                <link rel="icon" href="/favicon.png" sizes="32x32"></link>
            </Head>
            <NotificationPop />
            <Component {...pageProps} />
        </>
    );
}
