export default function PortalBtn() {
    return (
        <div id="portal-btn" className="flex flex-row items-center text-lg xl:text-xl 2xl:text-2xl">
            <button
                className="bg-green-500 text-white font-semibold px-6 py-4 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300"
                onClick={() => {
                    window.open("https://portal.terrahacks.ca", "_blank", 'noopener noreferrer');
                }}
            >
                Application Portal
            </button>
        </div>
    )
}