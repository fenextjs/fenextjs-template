import {
    ChangeLang,
    FenextjsInfo,
    FenextjsPage,
    FormLogin,
} from '@/components';
import { Cols } from '@/ui-fenextjs';

export default function Home() {
    return (
        <>
            <FenextjsPage>
                <FenextjsInfo />
                <Cols nCols={2}>
                    <FormLogin />
                    <ChangeLang />
                </Cols>
            </FenextjsPage>
        </>
    );
}
