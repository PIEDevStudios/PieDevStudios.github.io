import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import useGamePosts from "../hooks/useGamePosts";
import EmblaCarousel from "../components/EmblaCarousel.jsx";
import Steam from '../assets/icons/steam';
import './embla.css';


function IndvGames () {
    const OPTIONS = { loop: true }
    const { slug } = useParams();
    const { games, loading, error } = useGamePosts(slug);

    if (loading) return <div>Loading games...</div>;
    if (error) return <div>Error: {error}</div>;
    const game = games.find(b => b.slug === slug);
    if (!game) return <div>game not found</div>;

    return (
        <div className="bg-brown">
            <div className="container bg-beige pb-10">
                {game.frontmatter.thumbnail && (
                    <div className='relative object-contain'>    
                        <div className='absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-[#F5E4AD] via-30% from-0.5% z-1'/>                
                        <img 
                        src={game.frontmatter.thumbnail} 
                        alt={game.frontmatter.title}
                        onError={(e) => {
                            e.target.style.display = 'none';    
                            console.error('Failed to load image:', game.frontmatter.thumbnail);
                        }}
                        className='w-full'
                        />
                    </div>
                )}
                <div className='flex flex-col items-center py-10 px-5
                                sm:px-10 
                                md:px-15
                                lg:px-20'>
                    <h2 className='text-[#FF00AE] font-xl font-bold my-10'>{(game.frontmatter.title).toUpperCase()}</h2>
                    <iframe width="275" 
                        src={`https://www.youtube.com/embed/${game.frontmatter.trailer}`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        className='rounded-lg shadow-xl/30 aspect-video 
                                   sm:w-[60vw] 
                                   md:w-[40vw] 
                                   lg:w-[50vw]'
                        >
                    </iframe>
                    <div className='m-10'>                
                        {game.frontmatter.link && (
                        <a href={game.frontmatter.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                            <button className="flex bg-[#FB62AE] items-center text-white p-3 rounded-lg hover:bg-[#F95BC2] transition-colors cursor-pointer font-bold font-sm gap-3 my-10"> <Steam width={"footerlogos"}/>  TAKE ME TO THE STEAM PAGE </button>
                        </a>
                    )} 
                    </div>
                    {game.frontmatter.description ? (
                        <div className='react-markdown mb-20 px-5'>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                            {game.frontmatter.description}
                            </ReactMarkdown>
                        </div>
                        ) : (
                        <p className="text-red-500">No content available</p>
                    )}

                    <div className='font-bold font-lg mb-5
                                    sm:self-start'> FEATURES </div>
                    <div className="flex flex-col justify-between text-justify justify-items-center
                                    sm:flex-row sm:gap-10 sm:px-5
                                    md:gap-15">
                        {game.frontmatter.features ? (
                            <div className='react-markdown 
                                            sm:w-[50%]'>
                                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                                {game.frontmatter.features}
                                </ReactMarkdown>
                            </div>
                            ) : (
                            <p className="text-red-500">No content available</p>
                        )}
                        <div className='flex flex-col gap-5'>
                            {game.frontmatter.images.map((img, i) => (
                            <img key={i} src={img} alt={`Showcase ${i + 1}`} className='object-contain rounded-4xl h-[10vw] min-h-[150px]'/>
                            ))}                    
                        </div>
                    </div>
                </div>

                <EmblaCarousel games={games} home={false} options={OPTIONS} />
            </div>
        </div>
    )
}

export default IndvGames;