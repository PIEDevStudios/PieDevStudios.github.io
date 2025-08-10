import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useBlogPosts from '../hooks/useBlogPosts';
import useGamePosts from "../hooks/useGamePosts";
import EmblaCarousel from "../components/EmblaCarousel.jsx";

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
            <div className="flex flex-col justify-center items-center p-5 px-10 margin 
                            sm:p-5 sm:px-10">
                {blogs.slice(0, 3).map((blog, index) => (
                    <article key={index} className="flex flex-col">
                       <div className={`flex flex-col-reverse sm:gap-0
                                        xl:gap-20 
                                        ${index === 1 ? 'lg:flex-row-reverse lg:text-end' : ''}
                                        lg:flex-row lg:gap-10`}>
                            <div>
                                <h2 className='font-bold font-xl
                                               lg:mt-10
                                               sm:mt-5'>
                                    {blog.frontmatter.title}
                                </h2> 
                                <p className='font-md text-[#FF00AE] mb-10'>
                                    {new Date(blog.frontmatter.date).toLocaleDateString()}
                                </p>
                                <p className='text-justify font-sm'>
                                    {blog.content.split(/\s+/).length > 150
                                    ? blog.content.split(/\s+/).slice(0, 150).join(' ') + '...'
                                    : blog.content}  
                                </p>
                                <br />
                                <button className="cursor-pointer underline text-[#FF00AE] font-sm" onClick={() => navigate(`/IndvBlog/${blog.slug}`)}> Read more</button>
                            </div>
                            {blog.frontmatter.thumbnail && (
                                <img 
                                src={blog.frontmatter.thumbnail} 
                                alt={blog.frontmatter.title}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    console.error('Failed to load image:', blog.frontmatter.thumbnail);
                                }}
                                className="bg-white w-20 h-full border-3 border-[#FF00AE] rounded-lg w-[100%] max-h-[50vh] mt-10 object-contain
                                           xl:rounded-full xl:w-[20vw] xl:border-7
                                           lg:place-self-center lg:w-[20vw] lg:h-100
                                           md:border-5"
                                />
                            )}
                        </div>

                    </article>
                ))}
                <Link className="text-[#FF00AE] font-bold font-md self-end mb-15" to="/Blog"> More Posts --&#x203A; </Link>
            </div>
        </div>
    )
}
export default Home;