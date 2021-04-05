// PLACEHOLDER

import * as React from 'react';

const Vulcandex: React.FC<VulcandexProps> = (props) => {
    
    const [blogs, setBlogs] = React.useState<IBlog[]>([]);
    
    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/blogs');
            const blogs = await res.json();
            setBlogs(blogs);
        })();
    }, []);

    return (
        <main className="container">
            <section className="row">
                {blogs.map(blog => (
                    <PreviewCard key={`blog-preview-${blog.id}`} blog={blog}/>                    
                ))}
            </section>
        </main>
    );
};

interface VulcandexProps {}

export default Vulcandex;