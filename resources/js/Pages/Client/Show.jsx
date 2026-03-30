import { Head, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Show({ conference, isRegistered }) {
    return (
        <>
            <Head title={conference.title} />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">
                <div
                    data-aos="fade-up"
                    className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl w-full mx-auto"
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

                    {isRegistered ? (
                        <p className="text-green-600 font-medium text-sm">
                            {lt.alreadyRegisteredConference}
                        </p>
                    ) : (
                        <button
                            onClick={() => router.post(`/client/${conference.id}/register`)}
                            className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition"
                        >
                            {lt.register}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
