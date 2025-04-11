import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-[50vh] w-full">
            <div className="loader relative aspect-square"></div>
            <div className="font-semibold text-2xl text-primary">Loading...</div>
        </div>
    )
}

export default Loading;
