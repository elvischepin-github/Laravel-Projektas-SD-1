import { Head, Link, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Index({ conferences }) {
    return (
        <>
            <Head title="Conferences" />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 p-8">
                <h1
                    data-aos="fade-down"
                    className="text-3xl font-bold mb-6 text-white"
                >
                    {lt.upcomingConferences}
                </h1>
                <table
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="w-full bg-white shadow-xl rounded-2xl overflow-hidden"
                >
                    <thead className="bg-gray-50 border-b border-gray-100 text-left">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.title}
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.date}
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.address}
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {lt.actions}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {conferences.map((c) => (
                            <tr
                                key={c.id}
                                className="border-t border-gray-100 hover:bg-gray-50/60 transition-colors"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                    {c.title}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {c.date}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {c.address}
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <Link
                                        href={`/client/${c.id}`}
                                        className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
                                    >
                                        {lt.view}
                                    </Link>
                                    <button
                                        onClick={() => router.post(`/client/${c.id}/register`)}
                                        className="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
                                    >
                                        {lt.register}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
