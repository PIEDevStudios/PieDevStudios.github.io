import useGamePosts from "../hooks/useGamePosts";
import { useParams } from 'react-router-dom';

function IndvGames () {
    const { slug } = useParams();
    const { games, loading, error } = useGamePosts(slug);

    if (loading) return <div>Loading games...</div>;
    if (error) return <div>Error: {error}</div>;
    const game = games.find(b => b.slug === slug);
    if (!game) return <div>game not found</div>;
    return (
        <div>
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
        </div>
    )
}

export default IndvGames;