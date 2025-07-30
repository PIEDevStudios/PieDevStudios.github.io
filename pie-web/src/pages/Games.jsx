import useGamePosts from "../hooks/useGamePosts";
import { useNavigate } from 'react-router-dom';

function Games () {
    const navigate = useNavigate(); 
    const { games, loading, error } = useGamePosts();

    if (loading) return <div>Loading games...</div>;
    if (error) return <div>Error: {error}</div>;
    if (games.length === 0) return <div>No games found</div>;

    const unreleasedGames = games.filter(game => !game.frontmatter.released);
    const releasedGames = games.filter(game => game.frontmatter.released);

    return (
        <div className="bg-brown min-h-screen">
            <div className="margin bg-beige min-h-screen min-w-[20vh]">
                {unreleasedGames.length > 0 && (
                    <section className="mb-12">
                        <h1 className="text-2xl font-bold p-5">Coming Soon</h1>
                        {unreleasedGames.map((game, index) => (
                            <GameCard key={index} game={game} index={index} navigate={navigate} />
                        ))}
                    </section>
                )}
                {releasedGames.length > 0 && (
                    <section className="mb-12">
                        <h1 className="text-2xl font-bold p-5">Released Games</h1>
                        {releasedGames.map((game, index) => (
                            <GameCard key={index} game={game} index={index} navigate={navigate} />
                        ))}
                    </section>
                )}
            </div>
        </div>
    );
}

function GameCard({ game, index, navigate }) {
    return (
        <article key={index} className="p-5">
            <h2 className="text-xl font-semibold mb-2">{game.frontmatter.title}</h2>
            <div className="flex">
                <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${game.frontmatter?.trailer || ""}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                >
                </iframe>
                <div className="max-w-[20vw] ml-4">
                    <p className="mb-4">{game.frontmatter.description}</p>
                    <button 
                        className='p-3 border border-white rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition-colors'
                        onClick={() => navigate(`/IndvGames/${game.slug}`)}
                    >
                        See more
                    </button>                         
                </div>
            </div>
        </article>
    );
}
export default Games;
