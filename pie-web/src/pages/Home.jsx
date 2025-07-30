import { useEffect, useState } from 'react';
import useBlogPosts from '../hooks/useBlogPosts';
import useGamePosts from "../hooks/useGamePosts";
import EmblaCarousel from "../components/EmblaCarousel.jsx";
import { useNavigate } from 'react-router-dom';

function Home() {
    const OPTIONS = { loop: true };
    const navigate = useNavigate();
    const { blogs, loading, error } = useBlogPosts();
    const { games, loading: gamesLoading, error: gamesError } = useGamePosts();
    const [carouselReady, setCarouselReady] = useState(false);

    useEffect(() => {
        if (games.length > 0 && !gamesLoading) {
            // Small timeout to ensure DOM is ready
            const timer = setTimeout(() => {
                setCarouselReady(true);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [games, gamesLoading]);

    if (loading || gamesLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (gamesError) return <div>Error: {gamesError}</div>;
    if (!blogs || blogs.length === 0) return <div>No blogs found</div>;

    return (
        <div className="bg-beige min-h-screen">
            {carouselReady && games.length > 0 && (
                <div className="embla-container">
                    <EmblaCarousel 
                        games={games} 
                        home={true}
                        options={OPTIONS} 
                    />
                </div>
            )}
            
            
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