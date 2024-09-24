import React, { useState } from "react";
import { oct, Nov, Jan, Feb, Mar, May, Jun, Sep } from '../data/upcomingMatches';
import { useNavigate } from "react-router-dom";
import ScrollTopButton from "../components/Utils/ScrollTopButton";
import { FaCircleArrowLeft } from "react-icons/fa6";

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

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    }


    return (

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-[100vh] overflow-y-hidden">

            <button className=" text-2xl text-white mt-10  ml-10 font-semibold bg-[#FF6600] rounded-[50%] p-[15px] transition duration-300 hover:bg-[#ffa365]" onClick={handleNavigate} >
                <FaCircleArrowLeft fontSize={24} color='white' />
            </button>

            <div className="h-[100%] p-8 w-11/12 mx-auto">
                {/* <button className="px-10 text-xl py-2 text-white mt-10  ml-10 btn-pink font-semibold bg-[#FF6600] " id="btn-top" onClick={handleNavigate} >
                Back To Main Menu
            </button> */}



                <div className=" mx-auto  rounded-lg p-6">
                    <h1 className="text-3xl font-bold text-center text-white mb-6">
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

                                <p className="text-gray-600 mt-2 ">{match.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <ScrollTopButton />
            </div>
        </div>
    );
};

export default MatchList;
