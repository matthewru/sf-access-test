import Link from "next/link";

const HeaderSection = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="font-bold text-xl ml-16">
                       <Link href="/" className="hover:text-primary transition-colors">
                    MR
                    </Link>
                </div>
                <nav className="hidden md:flex ml-16">
                    <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors mr-8">
                        About
                    </Link>
                    <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors mr-8">
                        Experience
                    </Link>
                    <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors mr-8">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;
