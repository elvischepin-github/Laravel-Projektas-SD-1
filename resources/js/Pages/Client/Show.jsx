import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Show({ conference }) {
    return (
        <>
            <Head title={conference.title} />
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="bg-white shadow rounded-lg p-8 max-w-2xl mx-auto">
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
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Address:</span>{" "}
                        {conference.address}
                    </p>
                </div>
            </div>
        </>
    );
}
