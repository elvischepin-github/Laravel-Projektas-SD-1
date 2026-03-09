import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import ConferenceForm from "./Form";
import Navbar from "@/Components/Navbar";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        description: "",
        lecturers: "",
        date: "",
        time: "",
        address: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/admin/conferences");
    }

    return (
        <>
            <Head title="New Conference" />
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="bg-white shadow rounded-lg p-8 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">New Conference</h1>
                    <ConferenceForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        onSubmit={handleSubmit}
                        processing={processing}
                        submitLabel="Create"
                    />
                </div>
            </div>
        </>
    );
}
