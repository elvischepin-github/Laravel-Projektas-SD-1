import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index({ conferences }) {
    return (
        <>
            <Head title="Conferences" />
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                <h1 className="text-3xl font-bold mb-6">
                    Upcoming Conferences
                </h1>
                <table className="w-full bg-white shadow rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Location</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conferences.map((c) => (
                            <tr key={c.id} className="border-t">
                                <td className="px-6 py-4">{c.title}</td>
                                <td className="px-6 py-4">{c.date}</td>
                                <td className="px-6 py-4">{c.location}</td>
                                <td className="px-6 py-4 flex gap-2">
                                    <Link
                                        href={`/client/${c.id}`}
                                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                    >
                                        View
                                    </Link>
                                    <form
                                        method="POST"
                                        action={`/client/${c.id}/register`}
                                    >
                                        <input
                                            type="hidden"
                                            name="_token"
                                            value=""
                                        />
                                        <button
                                            type="submit"
                                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                        >
                                            Register
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
