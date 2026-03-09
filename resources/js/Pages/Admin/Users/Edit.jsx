import { Head, Link, useForm } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Edit({ user }) {
    const { data, setData, put, errors, processing } = useForm({
        name: user.name,
        surname: user.surname,
        email: user.email,
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(`/admin/users/${user.id}`);
    }

    return (
        <>
            <Head title="Edit User" />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">
                <div
                    data-aos="fade-up"
                    className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full mx-auto"
                >
                    <h1 className="text-3xl font-bold mb-6 text-gray-900">{lt.editUser}</h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1.5">
                                {lt.name}
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                            />
                            {errors.name && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1.5">
                                {lt.surname}
                            </label>
                            <input
                                type="text"
                                value={data.surname}
                                onChange={(e) =>
                                    setData("surname", e.target.value)
                                }
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                            />
                            {errors.surname && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.surname}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1.5">
                                {lt.email}
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="flex gap-3 mt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-50"
                            >
                                {lt.save}
                            </button>
                            <Link
                                href="/admin/users"
                                className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition"
                            >
                                {lt.cancel}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
