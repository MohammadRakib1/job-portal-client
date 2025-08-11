import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {

    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;

    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img
                        src={company_logo}
                        alt="LinkedIn Logo"
                        className="w-10 h-10 rounded"
                    />
                    <div>
                        <h3 className="text-md font-semibold text-gray-800">{company}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-2"><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                    </div>
                </div>
                <span className="text-green-500 text-xl">⚡</span>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-lg font-bold text-gray-800">
                {title}
            </h2>

            {/* Meta info */}
            <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                <span className="flex items-center space-x-1">
                    <span>Fulltime</span>
                </span>
                <span className="flex items-center space-x-1">
                    <span>4 minutes ago</span>
                </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600">
                {description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {requirements?.map((tool) => (
                    <span
                        key={tool}
                        className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                    >
                        {tool}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">${salaryRange.min}</span>
                <span className="text-sm text-gray-600">/Month</span>
                <Link to={`/job/${_id}`}>
                    <button className="ml-auto px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HotJobsCard;