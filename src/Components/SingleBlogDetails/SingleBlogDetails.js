import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const SingleBlogDetails = () => {
    const [blg, setBlg] = useState({})
    const { BlogId } = useParams()

    useEffect(() => {
        fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${BlogId}`)
            .then(res => res.json())
            .then(data => setBlg(data))
    }, [BlogId])
    return (
        <div className='flex flex-col justify-center items-center py-10 px-10'>
            <div>
                <img className='rounded-lg' src={blg.imageURL} alt="" />
            
            </div>
            <div>
                <p className='text-3xl py-3 text-dark-400'>  {blg.title}</p>
                <p className='mb-10'>   {blg.blog}</p>
                <Link className='bg-purple-500 px-5 py-3 rounded-lg' to='/'>Back Home</Link>
            </div>

        </div>
    );
};

export default SingleBlogDetails;