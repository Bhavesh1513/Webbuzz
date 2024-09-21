import React, { useState } from "react";
import { oct, Nov, Jan, Feb, Mar, May, Jun, Sep } from '../data/upcomingMatches'; 

const matchesData = [
    ...oct,
    ...Nov,
    ...Jan,
    ...Feb,
    ...Mar,
    ...May,
    ...Jun,
    ...Sep,
];

const monthMap = {
    All: "All",
    Oct: "Oct",
    Nov: "Nov",
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Mar",
    May: "May",
    Jun: "Jun",
    Sep: "Sep",
};

const MatchList = () => {
    const [selectedMonth, setSelectedMonth] = useState("All");


    const filteredMatches = matchesData.filter(match => {
        if (selectedMonth === "All") return true;
        return match.date.startsWith(monthMap[selectedMonth]);
    });

    return (
        <div className="h-[100%] p-8 w-11/12 mx-auto">

            <div className=" mx-auto  rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Cricket Matches
                </h1>

                <div className="mb-6 ">
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="text-xl font-semibold block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        {Object.keys(monthMap).map((month) => (
                            <option className="text-xl" key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {filteredMatches.map((match, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-blue-700">
                                {match.match}
                            </h3>
                            <p className="text-gray-600 mt-2">{match.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MatchList;
