import lt from "@/lang/lt";
import { Link, router, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

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
                {user && (
                    <span className="font-semibold text-zinc-200">
                        {user.name} {user.surname}
                    </span>
                )}
            </div>

            {user ? (
                <button
                    onClick={handleLogout}
                    className="text-zinc-200 text-sm font-medium px-4 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition"
                >
                    {lt.logout}
                </button>
            ) : (
                <div className="flex items-center gap-2">
                    <Link
                        href={route('login')}
                        className="text-zinc-200 text-sm font-medium px-4 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition"
                    >
                        {lt.login}
                    </Link>
                    <Link
                        href={route('register')}
                        className="bg-zinc-700 text-zinc-200 text-sm font-medium px-4 py-2 rounded-xl hover:bg-zinc-600 transition"
                    >
                        {lt.registerTitle}
                    </Link>
                </div>
            )}
        </nav>
    );
}
