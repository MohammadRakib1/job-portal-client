import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-2xl mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Job Application</h2>
            <form onSubmit={submitJobApplication} className="space-y-4">

                <div>
                    <label className="block mb-1 font-medium">Linkedin URL</label>
                    <input
                        type="url"
                        name="linkedin"
                        placeholder='linkedin url'
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Github URL</label>
                    <input
                        type="url"
                        name="github"
                        placeholder='github url'
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Resume</label>
                    <input
                        type="url"
                        name="resume"
                        placeholder='resume url'
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Apply
                </button>
            </form>
        </div>
    );
};

export default JobApply;