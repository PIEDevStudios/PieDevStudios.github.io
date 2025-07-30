import useGamePosts from "../hooks/useGamePosts";
import { useParams } from 'react-router-dom';
import EmblaCarousel from "../components/EmblaCarousel.jsx";
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
        <div className="bg-brown min-h-screen">
            <div className="margin bg-beige min-h-screen">
                {game.frontmatter.thumbnail && (
                    <img 
                    src={game.frontmatter.thumbnail} 
                    alt={game.frontmatter.title}
                    onError={(e) => {
                        e.target.style.display = 'none';    
                        console.error('Failed to load image:', game.frontmatter.thumbnail);
                    }}
                    />
                )}
                <h2>{game.frontmatter.title}</h2>
                <iframe width="560" height="315" 
                    src={`https://www.youtube.com/embed/${game.frontmatter.trailer}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
                {game.frontmatter.link && (
                    <a href={game.frontmatter.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                        <button className="bg-[#FB62AE] text-white p-3 rounded-lg hover:bg-[#F95BC2] transition-colors cursor-pointer"> Steam Link </button>
                    </a>
                )} 
                <p> {game.frontmatter.description} </p>

                <div className="flex">
                  <p className="w-[50%]"> {game.frontmatter.features} </p>  
                  <div>
                    {game.frontmatter.images.map((img, i) => (
                    <img key={i} src={img} alt={`Showcase ${i + 1}`} />
                    ))}                    
                  </div>
                </div>

                {game?.frontmatter?.imageCarousel && (
                    <EmblaCarousel game={game} options={OPTIONS} />
                )}
            </div>

        </div>
    )
}

export default IndvGames;