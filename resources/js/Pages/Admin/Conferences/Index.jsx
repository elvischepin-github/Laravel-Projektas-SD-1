import { Head, Link, router, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Index({ conferences }) {
    const { props } = usePage();
    const error = props.flash?.error;
    const today = new Date().toISOString().split("T")[0];

    function handleDelete(id, date) {
        if (date < today) return;
        if (confirm(lt.deleteConfirm)) {
            router.delete(`/admin/conferences/${id}`);
        }
    }

    return (
        <>
            <Head title="Conference Management" />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 p-8">
                <div
                    data-aos="fade-down"
                    className="flex items-center justify-between mb-6"
                >
                    <h1 className="text-3xl font-bold text-white">
                        {lt.conferenceManagement}
                    </h1>
                    <Link
                        href="/admin/conferences/create"
                        className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm"
                    >
                        {lt.newConference}
                    </Link>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 border border-red-100 px-4 py-3 rounded-xl mb-4 text-sm font-medium">
                        {error}
                    </div>
                )}

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
                        {conferences.map((c) => {
                            const isPast = c.date < today;
                            return (
                                <tr
                                    key={c.id}
                                    className="border-t border-gray-100 hover:bg-gray-50/60 transition-colors"
                                >
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                        {c.title}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {c.date}
                                        {isPast && (
                                            <span className="ml-2 text-xs bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 rounded-full font-medium">
                                                {lt.past}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {c.address}
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <Link
                                            href={`/admin/conferences/${c.id}/edit`}
                                            className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
                                        >
                                            {lt.edit}
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(c.id, c.date)
                                            }
                                            disabled={isPast}
                                            className="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
                                        >
                                            {lt.delete}
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
