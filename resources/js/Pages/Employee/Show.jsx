import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Show({ conference, clients }) {
    return (
        <>
            <Head title={conference.title} />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">
                <div
                    data-aos="fade-up"
                    className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl w-full mx-auto"
                >
                    <h1 className="text-3xl font-bold mb-4 text-gray-900">
                        {conference.title}
                    </h1>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{lt.description}:</span>{" "}
                        {conference.description}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{lt.lecturers}:</span>{" "}
                        {conference.lecturers}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{lt.date}:</span>{" "}
                        {conference.date}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{lt.time}:</span>{" "}
                        {conference.time}
                    </p>
                    <p className="text-gray-700 mb-6">
                        <span className="font-semibold">{lt.address}:</span>{" "}
                        {conference.address}
                    </p>

                    <h2 className="text-xl font-bold mb-4">
                        {lt.registeredClients}
                    </h2>
                    <table className="w-full border border-gray-100 rounded-xl overflow-hidden">
                        <thead className="bg-gray-50 border-b border-gray-100 text-left">
                            <tr>
                                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {lt.name}
                                </th>
                                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {lt.email}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr
                                    key={client.id}
                                    className="border-t border-gray-100 hover:bg-gray-50/60 transition-colors"
                                >
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800">
                                        {client.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600">
                                        {client.email}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
