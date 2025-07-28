import HomeCarousel from "../components/HomeCarousel";
import useBlogPosts from '../hooks/useBlogPosts';
import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();
    const { blogs, loading, error } = useBlogPosts();

    if (loading) return <div>Loading blog...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!blogs || blogs.length === 0) return <div>No blogs found</div>;
    
    return (
        <div className="bg-beige min-h-screen">
            <HomeCarousel />
            <div className="margin min-h-screen flex flex-col justify-center items-center text-2xl p-5">
                {blogs.slice(0, 3).map((blog, index) => (
                    <article key={index} className={`flex ${index === 1 ? 'flex-row-reverse' : ''}`}>
                        <div>
                            <h2>{blog.frontmatter.title}</h2>
                            <p>{new Date(blog.frontmatter.date).toLocaleDateString()}</p>
                            {blog.content.split(/\s+/).length > 150
                                ? blog.content.split(/\s+/).slice(0, 150).join(' ') + '...'
                                : blog.content}
                            <br />
                            <button className="cursor-pointer underline" onClick={() => navigate(`/IndvBlog/${blog.slug}`)}> Read more</button>
                        </div>
                        
                        {blog.frontmatter.thumbnail && (
                            <img 
                            src={blog.frontmatter.thumbnail} 
                            alt={blog.frontmatter.title}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                console.error('Failed to load image:', blog.frontmatter.thumbnail);
                            }}
                            className="place-self-center"
                            />
                        )}
                    </article>
                ))}
            </div>
        </div>
    )
}
export default Home;