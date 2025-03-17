'use client'

import { useParams } from 'next/navigation';

const BlogDetail = () => {
    const params = useParams();
    const { slug } = params;

    return (
        <div>
            <h1>Blog Post {slug}</h1>
        </div>
    );
};

export default BlogDetail; 