import React from 'react';
import './FranchiseCard.css';

const FranchiseCard = ({ team }) => {
    return (
        <div className="card w-[296px] h-[290px] flex flex-col justify-center items-center rounded-l-2xl " style={{ boxShadow: 'rgba(255, 255, 255, 0.16) 0px 3px 6px, rgba(255, 255, 255, 0.23) 0px 3px 6px' }} >
            <div className="card-before-hover  w-[100%] h-[100%] flex flex-col justify-center items-center" style={{ backgroundColor: team.textsectionBackgroundColorBeforeHover }}>
                <div className='w-[100%] h-[80%] flex justify-center items-center rounded-b-[45%]' style={{ backgroundColor: team.imageBakcGroundBeforeHover }}>
                    <img src={team.imageBeforeHover} alt={team.name} className="team-logo w-[120px] h-[120px]" />
                </div>
                <div className='w-[100%] h-[20%] flex justify-center items-center text-3xl text-white font-semibold' style={{ backgroundColor: team.textsectionBackgroundColorBeforeHover }}>
                    <h2 >{team.name}</h2>
                </div>
            </div>

            <div className="card-after-hover  w-[100%] h-[100%] bg-gray-200">
                <div className='w-[100%] h-[80%] flex justify-center items-center rounded-b-[45%]  bg-white '>
                    <img src={team.imageAfterHover} alt="Trophy" className="trophy w-[120px] h-[120px]" />
                </div>
                <div className='w-[100%] h-[20%] flex justify-center items-center text-3xl text-black font-semibold bg-gray-200'>
                    <p className="years">{team.titles.join(' | ')}</p>
                </div>
            </div>
        </div>
    );
};

export default FranchiseCard;
