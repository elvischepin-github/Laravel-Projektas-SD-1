import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index() {
    return (
        <>
            <Head title="Administrator" />
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded-lg p-10 max-w-lg w-full text-center">
                    <h1 className="text-3xl font-bold mb-8">
                        Administrator Panel
                    </h1>

                    <div className="flex flex-col gap-4">
                        <Link
                            href="/admin/users"
                            className="block bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                        >
                            User Management
                        </Link>
                        <Link
                            href="/admin/conferences"
                            className="block bg-green-600 text-white py-3 rounded hover:bg-green-700"
                        >
                            Conference Management
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
