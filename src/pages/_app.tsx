import '../../styles/index.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationPop, useHistory } from 'fenextjs';
import Head from 'next/head';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    useHistory({});
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <title>¡Bienvenido a Fenextjs!</title>
                    <link rel="icon" href="/favicon.png" sizes="32x32"></link>
                </Head>
                <NotificationPop />
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    );
}
