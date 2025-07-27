import HomeCarousel from "../components/HomeCarousel";
import useBlogPosts from '../hooks/useBlogPosts';
import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();
    const { posts, loading, error } = useBlogPosts();

    if (loading) return <div>Loading post...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!posts || posts.length === 0) return <div>No posts found</div>;
    
    return (
        <div className="bg-beige min-h-screen">
            <HomeCarousel />
            <div className="margin min-h-screen flex flex-col justify-center items-center text-2xl p-5">
                {posts.slice(0, 3).map((post, index) => (
                    <article key={index} className={`flex ${index === 1 ? 'flex-row-reverse' : ''}`}>
                        <div>
                            <h2>{post.frontmatter.title}</h2>
                            <p>{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                            {post.content.split(/\s+/).length > 150
                                ? post.content.split(/\s+/).slice(0, 150).join(' ') + '...'
                                : post.content}
                            <br />
                            <button className="cursor-pointer underline" onClick={() => navigate(`/IndvBlog/${post.slug}`)}> Read more</button>
                        </div>
                        
                        {post.frontmatter.thumbnail && (
                            <img 
                            src={post.frontmatter.thumbnail} 
                            alt={post.frontmatter.title}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                console.error('Failed to load image:', post.frontmatter.thumbnail);
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