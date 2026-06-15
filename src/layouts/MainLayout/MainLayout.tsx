import type { ReactNode } from 'react';
import Navbar from '../../components/Navbar/Navbar';
interface MainLayoutProps {
    children: ReactNode;
}
function MainLayout ({children}:MainLayoutProps) {
    return (
        <>
        <Navbar />
        <main>
            {children}
        </main>
        </>
    );
}
export default MainLayout;