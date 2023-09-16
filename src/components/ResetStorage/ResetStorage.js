import React from 'react';
import { toast } from 'react-hot-toast';

function ResetStorage({resetHandle}) {
    const {
        setCourse,
        setRemaininghours,
        setHours,
        setTotalPrice
    } = resetHandle;
    console.log(resetHandle);

    function handleReset() {
        localStorage.clear();
        setCourse([]);
        setRemaininghours(20);
        setHours(undefined);
        setTotalPrice(undefined);

        toast.success('Local storage data cleared!');
    }

    return (
        <div>
            <button className='w-full bg-[#2f80ed] text-white font-bold rounded py-[9px] mt-6' onClick={handleReset}>Reset</button>
        </div>
    );
}

export default ResetStorage
