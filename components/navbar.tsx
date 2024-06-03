import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <div className='flex items-cnter p-4'>
            <MobileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
            <h1>{title}</h1>
        </div>
    );
};

export default Navbar;