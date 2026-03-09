import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded-lg p-10 max-w-lg w-full text-center">
                    <h1 className="text-3xl font-bold mb-2">
                        Conference System
                    </h1>
                    <p className="text-gray-600 mb-1">Elvis Cepinskas</p>
                    <p className="text-gray-600 mb-8">Group: XX</p>

                    <div className="flex flex-col gap-4">
                        <Link
                            href="/client"
                            className="block bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                        >
                            Client
                        </Link>
                        <Link
                            href="/employee"
                            className="block bg-green-600 text-white py-3 rounded hover:bg-green-700"
                        >
                            Employee
                        </Link>
                        <Link
                            href="/admin"
                            className="block bg-gray-800 text-white py-3 rounded hover:bg-gray-900"
                        >
                            Administrator
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
