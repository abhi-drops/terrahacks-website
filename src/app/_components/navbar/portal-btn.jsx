export default function PortalBtn() {
    return (
        <div id="portal-btn" className="flex flex-row items-center text-lg xl:text-xl 3xl:text-5xl">
            <button
                className="bg-green-500 text-white font-semibold px-6 py-4 3xl:py-8 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300"
                onClick={() => {
                    window.open("https://portal.terrahacks.ca", "_blank");
                }}
            >
                Application Portal
            </button>
        </div>
    )
}