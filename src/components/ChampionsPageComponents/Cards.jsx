import React, { useEffect, useState } from 'react';
import { ICCWinnerData } from '../../data/worldCupWinner';
import { T20WinnerData } from '../../data/worldCupWinner';
import Button from '../Utils/Button';
import Card from '../Utils/Card';

const Cards = () => {
    const [format, setFormat] = useState("ODI");
    const [data, setData] = useState(ICCWinnerData);

    useEffect(() => {
        setData(format === "ODI" ? ICCWinnerData : T20WinnerData);
    }, [format]);

    return (
        <div className='mt-20  flex flex-col justify-center items-center gap-10 w-11/12'>
            <div className='flex flex-row gap-10  p-5 w-[100%] justify-center items-center'>
                <Button width={"w-52"} text={"ODI"} fontSize={"text-5xl"} fontWeight="font-semibold" borderRadius="rounded-2xl" textColor="text-[#CC5500]" onClick={() => setFormat("ODI")}
                    border={format === "ODI" ? "border-4 border-[#CC5500]" : "border-2 border-transparent"}
                />
                <Button width={"w-52"} text={"T20"} fontSize={"text-5xl"} fontWeight="font-semibold" borderRadius="rounded-2xl" textColor="text-[#CC5500]" onClick={() => setFormat("T20")}
                    border={format === "T20" ? "border-4 border-[#CC5500]" : "border-2 border-transparent"}
                />
            </div>
            <div className='flex h-full gap-10 w-[100%] px-10 flex-wrap py-10 justify-center'>
                {data.length > 0 ? (
                    data.map((item) => {
                        const winningYearsFormatted = item.winningYears.join(', ');

                        return (
                            <Card
                                key={item.id}
                                image={item.image}
                                country={item.country}
                                winningYears={winningYearsFormatted}
                            />
                        );
                    })
                ) : (
                    <div>No data</div>
                )}
            </div>
        </div>
    );
};

export default Cards;
