import { APP_NAME } from './header.constants';

const HeaderLogo = () => {
    return (
        <div className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 rounded bg-green-500" />
            <span className="text-white font-semibold text-lg">
        {APP_NAME}
      </span>
        </div>
    );
};

export default HeaderLogo;
