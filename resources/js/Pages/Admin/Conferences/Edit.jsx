import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import ConferenceForm from "./Form";
import Navbar from "@/Components/Navbar";
import lt from "@/lang/lt";

export default function Edit({ conference }) {
    const { data, setData, put, errors, processing } = useForm({
        title: conference.title,
        description: conference.description,
        lecturers: conference.lecturers,
        date: conference.date,
        time: conference.time,
        address: conference.address,
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(`/admin/conferences/${conference.id}`);
    }

    return (
        <>
            <Head title="Edit Conference" />
            <Navbar />
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">
                <div
                    data-aos="fade-up"
                    className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl w-full mx-auto"
                >
                    <h1 className="text-3xl font-bold mb-6 text-gray-900">
                        {lt.editConference}
                    </h1>
                    <ConferenceForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        onSubmit={handleSubmit}
                        processing={processing}
                        submitLabel={lt.save}
                    />
                </div>
            </div>
        </>
    );
}
