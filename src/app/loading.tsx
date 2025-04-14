import Loader from '@/components/ui/loader';
import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-[50vh] w-full">
            <Loader/>
            <div className="font-semibold text-2xl text-primary">Loading...</div>
        </div>
    )
}

export default Loading;
