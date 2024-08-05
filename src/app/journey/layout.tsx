import LayoutBlock from "@/components/layoutBlock/layoutBlock/LayoutBlock";

export default async function JourneyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LayoutBlock children={children} />
    );
}