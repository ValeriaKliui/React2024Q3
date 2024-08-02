import { DetailedCard } from '@components/DetailedCard';
import Layout from '@pages/layout';
import Providers from '@pages/providers';

export default function DetailPage() {
    return (
        <Providers>
            <Layout>
                <DetailedCard />
            </Layout>
        </Providers>
    );
}
