import React from 'react';
import Swal from 'sweetalert2';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        console.log(newJob)
        newJob.salaryRange = { min, max, currency }
        console.log(newJob);
        newJob.requirement = newJob.requirement.split('\n');
        newJob.responsibility = newJob.responsibility.split('\n');
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job has been Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJob')
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleAddJob} className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-center">Create Job Posting</h2>

                <input
                    name='title'
                    type="text"
                    placeholder="Job Title"
                    className="w-full border p-2 rounded"
                />

                <input
                    name='location'
                    type="text"
                    placeholder="Location"
                    className="w-full border p-2 rounded"
                />

                <select className="w-full border p-2 rounded">
                    <option value="">Select Job Type</option>
                    <option>Onsite</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                </select>

                <input
                    name='category'
                    type="text"
                    placeholder="Category"
                    className="w-full border p-2 rounded"
                />

                <label className="block font-semibold">Application Deadline</label>
                <input name='date' type="date" className="w-full border p-2 rounded" />

                <div className="flex gap-2">
                    <input
                        name='min'
                        type="number"
                        placeholder="Min Salary"
                        className="w-1/3 border p-2 rounded"
                    />
                    <input
                        name='max'
                        type="number"
                        placeholder="Max Salary"
                        className="w-1/3 border p-2 rounded"
                    />
                    <select className="w-1/3 border p-2 rounded">
                        <option value="bdt">BDT</option>
                        <option value="usd">USD</option>
                    </select>
                </div>

                <textarea
                    name='description'
                    placeholder="Job Description"
                    className="w-full border p-2 rounded"
                    rows="4"
                />

                <input
                    name='companyName'
                    type="text"
                    placeholder="Company Name"
                    className="w-full border p-2 rounded"
                />

                <div>
                    <label className="font-semibold">Requirements</label>
                    <input
                        name='requirement'
                        type="text"
                        placeholder="Requirement"
                        className="w-full border p-2 rounded my-1"
                    />
                </div>

                <div>
                    <label className="font-semibold">Responsibilities</label>
                    <input
                        name='responsibility'
                        type="text"
                        placeholder="Responsibility"
                        className="w-full border p-2 rounded my-1"
                    />
                </div>

                <select className="w-full border p-2 rounded">
                    <option value="active">Active</option>
                    <option value="closed">Closed</option>
                </select>

                <input
                    name='hr_email'
                    type="email"
                    placeholder="HR Email"
                    className="w-full border p-2 rounded"
                />

                <input
                    name='hrName'
                    type="text"
                    placeholder="HR Name"
                    className="w-full border p-2 rounded"
                />

                <input
                    name='companyLogoUrl'
                    type="url"
                    placeholder="Company Logo URL"
                    className="w-full border p-2 rounded"
                />

                <button className="w-full bg-green-600 text-white p-2 rounded">
                    Submit Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;