import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Show({ conference, clients }) {
    return (
        <>
            <Head title={conference.title} />
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="bg-white shadow rounded-lg p-8 max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">
                        {conference.title}
                    </h1>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Description:</span>{" "}
                        {conference.description}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Lecturers:</span>{" "}
                        {conference.lecturers}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Date:</span>{" "}
                        {conference.date}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Time:</span>{" "}
                        {conference.time}
                    </p>
                    <p className="text-gray-700 mb-6">
                        <span className="font-semibold">Address:</span>{" "}
                        {conference.address}
                    </p>

                    <h2 className="text-xl font-bold mb-4">
                        Registered Clients
                    </h2>
                    <table className="w-full border rounded overflow-hidden">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id} className="border-t">
                                    <td className="px-4 py-2">{client.name}</td>
                                    <td className="px-4 py-2">
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
