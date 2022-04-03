import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import BlogDetails from '../BlogDetails/BlogDetails';

const Blog = () => {
    const [blogs] = useBlogs();
    return (
        <div className='my-20 mx-20'>
            {
                blogs.map(blogItem => <BlogDetails 
                blogItem={blogItem}
                key={blogItem._id}
                ></BlogDetails>)
            }
        </div>
    );
};

export default Blog;