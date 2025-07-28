import useGamePosts from "../hooks/useGamePosts";
import { useNavigate } from 'react-router-dom';

function Games () {
    const navigate = useNavigate(); 
    const { games, loading, error } = useGamePosts();

    if (loading) return <div>Loading games...</div>;
    if (error) return <div>Error: {error}</div>;
    if (games.length === 0) return <div>No games found</div>;

    return (
        <div className="bg-brown min-h-screen">
            <div className="margin bg-beige min-h-screen">
                {games.map((game, index) => (
                    <article 
                        key={index} 
                        className="border border-white p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer">
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
                            src={`https://www.youtube.com/embed/${games[index]?.frontmatter?.trailer || ""}`} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                        <br/>
                        {game.frontmatter.link && (
                        <a
                            href={game.frontmatter.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-600 block mt-2"
                        >
                            Steam Link
                        </a>
                        )}
                        <br/>
                        {game.frontmatter.description}
                        {game.frontmatter.features}

                        {game.frontmatter.images.map((img, i) => (
                        <img key={i} src={img} alt={`Showcase ${i + 1}`} />
                        ))}
                        {game.frontmatter.imageCarousel.map((img, i) => (
                        <img key={i} src={img} alt={`Carousel ${i + 1}`} />
                        ))}
                    </article>
                ))}
            </div>

        </div>
    ) 
}
export default Games;