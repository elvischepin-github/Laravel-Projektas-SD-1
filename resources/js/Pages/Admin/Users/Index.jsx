import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index({ users }) {
    return (
        <>
            <Head title="User Management" />
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                <h1 className="text-3xl font-bold mb-6">User Management</h1>
                <table className="w-full bg-white shadow rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Surname</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-t">
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.surname}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/admin/users/${user.id}/edit`}
                                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
