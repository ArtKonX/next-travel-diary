import LayoutBlock from "@/components/layoutBlock/layoutBlock/LayoutBlock";

export default async function WriteJourneyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LayoutBlock children={children} />
    );
}