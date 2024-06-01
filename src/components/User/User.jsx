import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
    return <>
    <div className='flex justify-center text-blue-700 text-3xl font-extrabold bg-gray-200 p-4'>
        User : {userid}
    </div>
    </>
}

export default User
