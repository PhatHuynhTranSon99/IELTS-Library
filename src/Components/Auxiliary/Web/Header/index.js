import Link from "./link";

const Header = () => (
    <header className="w-full">
        <nav className="w-full">
            <ul className="flex justify-center">
                <Link title="Trang chủ" href="https://google.com"/>

                <Link title="Thư viện đề thi" href="https://google.com"/>
                
                <Link title="Đề Writing mới nhất" href="https://google.com"/>

                <Link title="Đề Speaking mới nhất" href="https://google.com"/>
            </ul>
        </nav>
    </header>
);

export default Header;