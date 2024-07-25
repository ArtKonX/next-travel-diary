import type { Metadata } from "next";
import JourneysContainer from '@/components/journeys/JourneysContainer'

export const metadata: Metadata = {
    title: 'MatrixBlog',
}

export default function HomePage() {

    return (
        <div>
            <JourneysContainer/>
        </div>
    );
};