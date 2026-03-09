import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import ConferenceForm from "./Form";
import Navbar from "@/Components/Navbar";

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
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="bg-white shadow rounded-lg p-8 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Edit Conference</h1>
                    <ConferenceForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        onSubmit={handleSubmit}
                        processing={processing}
                        submitLabel="Save"
                    />
                </div>
            </div>
        </>
    );
}
