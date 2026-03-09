import { Head, Link, useForm } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

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
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="bg-white shadow rounded-lg p-8 max-w-lg mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Edit User</h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Surname
                            </label>
                            <input
                                type="text"
                                value={data.surname}
                                onChange={(e) =>
                                    setData("surname", e.target.value)
                                }
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.surname && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.surname}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                            >
                                Save
                            </button>
                            <Link
                                href="/admin/users"
                                className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
