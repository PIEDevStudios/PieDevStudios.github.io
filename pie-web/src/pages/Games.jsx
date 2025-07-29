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
                    <article key={index} className="p-5">
                        <h2>{game.frontmatter.title}</h2>
                        <div className="flex">
                            <iframe width="560" height="315" 
                                src={`https://www.youtube.com/embed/${games[index]?.frontmatter?.trailer || ""}`} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            >
                            </iframe>
                            <div className="max-w-[20vw]">
                                {game.frontmatter.description}   
                                <br />
                                <button className='p-5 border border-white rounded-lg bg-white cursor-pointer' onClick={() => navigate(`/IndvGames/${game.slug}`)}> see more </button>                         
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    ) 
}
export default Games;