export default function Navbar() {
    const user = { name: "Elvis", surname: "Cepinskas" };

    return (
        <nav className="bg-white shadow px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
                >
                    ← Back
                </button>
                <span className="font-semibold text-gray-800">
                    {user.name} {user.surname}
                </span>
            </div>
            <button
                disabled
                className="bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed opacity-60"
            >
                Logout
            </button>
        </nav>
    );
}
