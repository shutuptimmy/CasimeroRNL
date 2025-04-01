import Navbar from "../../components/navbar"

interface MainLayoutProps {
    content: React.ReactNode;
}
const MainLayout = ({ content }: MainLayoutProps) => {
    return (
        <>
            <div className="container-fluid">
                <Navbar />

                <div> {content}</div>
            </div>
        </>
    )
}

export default MainLayout;