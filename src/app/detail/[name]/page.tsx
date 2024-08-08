

import { DetailedCard } from "@components/DetailedCard";
import Providers from "../../ui/providers";
import Layout from "../../ui/layout";

export function generateStaticParams() {
    return [{ name: "/" }];
}
export default function DetailPage() {
    return (
        <Providers>
            <Layout>
                <DetailedCard />
            </Layout>
        </Providers>
    );
}

