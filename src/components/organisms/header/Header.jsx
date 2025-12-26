import HeaderLogo from './HeaderLogo';
import HeaderActions from './HeaderActions';
import HeaderUserMenu from './HeaderUserMenu';

const Header = () => {
    return (
        <header className="w-full h-16 flex items-center justify-between px-6 bg-gray-900 border-b border-gray-800">
            <HeaderLogo />

            <div className="flex items-center gap-4">
                <HeaderActions />
                <HeaderUserMenu />
            </div>
        </header>
    );
};

export default Header;
