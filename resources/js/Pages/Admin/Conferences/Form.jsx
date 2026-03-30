import lt from "@/lang/lt";
import { Link } from "@inertiajs/react";

const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition";

export default function ConferenceForm({
    data,
    setData,
    errors,
    onSubmit,
    processing,
    submitLabel,
}) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    {lt.title}
                </label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className={inputClass}
                />
                {errors.title && (
                    <p className="text-red-600 text-sm mt-1">{errors.title}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    {lt.description}
                </label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    rows={4}
                    className={inputClass}
                />
                {errors.description && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.description}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    {lt.lecturers}
                </label>
                <input
                    type="text"
                    value={data.lecturers}
                    onChange={(e) => setData("lecturers", e.target.value)}
                    className={inputClass}
                />
                {errors.lecturers && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.lecturers}
                    </p>
                )}
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        {lt.date}
                    </label>
                    <input
                        type="date"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                        className={inputClass}
                    />
                    {errors.date && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.date}
                        </p>
                    )}
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        {lt.time}
                    </label>
                    <input
                        type="time"
                        value={data.time}
                        onChange={(e) => setData("time", e.target.value)}
                        className={inputClass}
                    />
                    {errors.time && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.time}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    {lt.address}
                </label>
                <input
                    type="text"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                    className={inputClass}
                />
                {errors.address && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.address}
                    </p>
                )}
            </div>

            <div className="flex gap-3 mt-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                    {submitLabel}
                </button>
                <Link
                    href="/admin/conferences"
                    className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition"
                >
                    {lt.cancel}
                </Link>
            </div>
        </form>
    );
}
