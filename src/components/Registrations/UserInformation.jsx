import React from 'react'

const UserInformation = ({ name, email, phone, alternateNumber, street, city, zip }) => {
    return (
        <div className='flex flex-col gap-8'>
            <h3 className='text-4xl text-center font-semibold'>Review your information</h3>
            <div className='border-b-2 border-[#0000ff] pb-4' >
                <div className='text-3xl font-semibold w-fit text-[#0740dd]'>Personal Details</div>
                <div className='flex flex-row text-2xl gap-10' >
                    <p className='w-60'>Name:</p>
                    <p className='w-60'>{name}</p>
                </div>
                <div className='flex flex-row text-2xl gap-10'>
                    <p className='w-60'>Email:</p>
                    <p className='w-60'>{email}</p>
                </div>
            </div>

            <div className='border-b-2 border-[#0000ff] pb-4'>
                <div className='text-3xl font-semibold text-[#0740dd]'>Contact Details</div>
                <div className='flex flex-row text-2xl gap-10'>
                    <p className='w-60'>Phone no.:</p>
                    <p className='w-60'>{phone}</p>
                </div>
                <div className='flex flex-row text-2xl gap-10'>
                    <p className='w-60'>Alternate contact no.:</p>
                    <p className='w-60'>{alternateNumber}</p>
                </div>
            </div>

            <div >
                <div className='text-3xl font-semibold text-[#0740dd]'>Address</div>
                <div className='flex flex-row text-2xl gap-10'>
                    <p className='w-60'>Street:</p>
                    <p className='w-60'>{street}</p>
                </div>
                <div className='flex flex-row text-2xl gap-10'>
                    <p className='w-60'>City:</p>
                    <p className='w-60'>{city}</p>
                </div>
                <div className='flex flex-row text-2xl gap-10'>
                    <p className='w-60'>Zip:</p>
                    <p className='w-60'>{zip}</p>
                </div>
            </div>
        </div>
    )
}

export default UserInformation