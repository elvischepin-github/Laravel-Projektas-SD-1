import { Head, Link, router, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index({ conferences }) {
    const { props } = usePage();
    const error = props.flash?.error;
    const today = new Date().toISOString().split("T")[0];

    function handleDelete(id, date) {
        if (date < today) return;
        if (confirm("Are you sure you want to delete this conference?")) {
            router.delete(`/admin/conferences/${id}`);
        }
    }

    return (
        <>
            <Head title="Conference Management" />
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">
                        Conference Management
                    </h1>
                    <Link
                        href="/admin/conferences/create"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        + New Conference
                    </Link>
                </div>

                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <table className="w-full bg-white shadow rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Address</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conferences.map((c) => {
                            const isPast = c.date < today;
                            return (
                                <tr key={c.id} className="border-t">
                                    <td className="px-6 py-4">{c.title}</td>
                                    <td className="px-6 py-4">
                                        {c.date}
                                        {isPast && (
                                            <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                                                Past
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">{c.address}</td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <Link
                                            href={`/admin/conferences/${c.id}/edit`}
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(c.id, c.date)
                                            }
                                            disabled={isPast}
                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
