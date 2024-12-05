import '../../styles/index.css';
import type { AppProps } from 'next/app';
import { NotificationPop, useHistory } from 'fenextjs';

export default function App({ Component, pageProps }: AppProps) {
    useHistory({});
    return (
        <>
            <NotificationPop />
            <Component {...pageProps} />
        </>
    );
}
