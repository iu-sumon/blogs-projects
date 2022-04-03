import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = ({ blogItem }) => {
    const { title, blog, imageURL,_id } = blogItem;
    return (
        <div className='grid md:grid-cols-2 items-center justify-items-center my-10 p-5 shadow-xl rounded-2xl bg-slate-300'>
            <div>
              <Link to={`/getBlog/${_id}`}><img className='border-4 p-1 rounded-lg'  src={imageURL} alt="" /></Link>
            </div>
            <div>
                <p className='text-4xl mb-3 '>{title}</p>
                <p>{blog.length > 400 ? blog.slice(0, 400) + '....Read More' : blog}</p>
            </div>
        </div>
    );
};

export default BlogDetails;