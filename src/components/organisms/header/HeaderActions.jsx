const HeaderActions = () => {
    return (
        <div className="flex items-center gap-3">
            <button
                type="button"
                className="text-gray-400 hover:text-white transition"
                aria-label="Notifications"
            >
                🔔
            </button>

            <button
                type="button"
                className="text-gray-400 hover:text-white transition"
                aria-label="Settings"
            >
                ⚙️
            </button>
        </div>
    );
};

export default HeaderActions;
