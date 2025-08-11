import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {

    const applications = useLoaderData();

    return (
        <div>
            <h2 className='text-3xl'>application for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>update status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled selected>Tiny</option>
                                        <option>Tiny Apple</option>
                                        <option>Tiny Orange</option>
                                        <option>Tiny Tomato</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;