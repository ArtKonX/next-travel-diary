import HeaderContainer from "@/components/header/HeaderContainer";

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container">
            <div className="wrapper">
                <HeaderContainer />
                {children}
            </div>
        </div>
    );
}