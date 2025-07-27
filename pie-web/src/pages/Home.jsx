import HomeCarousel from "../components/HomeCarousel";
import useBlogPosts from '../hooks/useBlogPosts';

function Home () {
    const { posts, loading, error } = useBlogPosts();

    if (loading) return <div>Loading post...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!posts || posts.length === 0) return <div>No posts found</div>;
    
    return (
        <div className="bg-beige min-h-screen">
            <HomeCarousel />
            <div className="margin min-h-screen flex flex-col justify-center items-center">
                {posts.slice(0, 3).map((post, index) => (
                    <article key={index}>
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
                        <h2>{post.frontmatter.title}</h2>
                        <p>{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                        {post.content.split(/\s+/).length > 300
                            ? post.content.split(/\s+/).slice(0, 300).join(' ') + '...'
                            : post.content}
                    </article>
                ))}
            </div>
        </div>
    )
}
export default Home;