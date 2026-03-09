import { useForm } from "@inertiajs/react";

export default function ConferenceForm({ data, setData, errors, onSubmit, processing, submitLabel }) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    rows={4}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lecturers</label>
                <input
                    type="text"
                    value={data.lecturers}
                    onChange={(e) => setData("lecturers", e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lecturers && <p className="text-red-600 text-sm mt-1">{errors.lecturers}</p>}
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                        type="date"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                        type="time"
                        value={data.time}
                        onChange={(e) => setData("time", e.target.value)}
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                    type="text"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
            </div>

            <div className="flex gap-3 mt-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {submitLabel}
                </button>
                <a
                    href="/admin/conferences"
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
                >
                    Cancel
                </a>
            </div>
        </form>
    );
}
