import Image from 'next/image';
import { ThumbUpIcon } from "@heroicons/react/outline"
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} className="p-2 group cursor-pointer transition : ;
        duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout='responsive'
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`
                }
                height={1080}
                width={1920}
                className="rounded"
            />
            <div className="p-2">
                <h1 className="text-center mt-1 mb-1 text-2xl text-white
                transition-all duration-100 ease-in-out group-hover:font-bold">{result.name || result.original_title}</h1>
                <p className="max-w-md text-center">{result.overview}</p>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} `}
                    {result.release_date}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
