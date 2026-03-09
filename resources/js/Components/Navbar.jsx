import lt from "@/lang/lt";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    const user = { name: "Elvis", surname: "Cepinskas" };

    return (
        <nav className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-700/50 shadow-sm px-8 py-3 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => window.history.back()}
                    className="bg-zinc-700 text-zinc-200 text-sm font-medium px-4 py-2 rounded-xl hover:bg-zinc-600 transition"
                >
                    {lt.back}
                </button>
                <Link
                    href="/"
                    className="bg-zinc-700 text-zinc-200 text-sm font-medium px-4 py-2 rounded-xl hover:bg-zinc-600 transition"
                >
                    {lt.home}
                </Link>
                <span className="font-semibold text-zinc-200">
                    {user.name} {user.surname}
                </span>
            </div>
            <button
                disabled
                className="text-zinc-500 text-sm font-medium px-4 py-2 rounded-xl cursor-not-allowed border border-zinc-700 opacity-60"
            >
                {lt.logout}
            </button>
        </nav>
    );
}
