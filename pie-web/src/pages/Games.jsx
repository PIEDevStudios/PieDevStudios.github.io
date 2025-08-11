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
            <div className="container bg-beige min-h-screen min-w-[20vh] 
                            sm:px-20">
                {unreleasedGames.length > 0 && (
                    <section className="pb-12">
                        <h1 className="font-md font-bold p-5 text-[#FF00AE]">COMING SOON</h1>
                        {unreleasedGames.map((game, index) => (
                            <GameCard key={index} game={game} index={index} navigate={navigate} />
                        ))}
                    </section>
                )}
                {releasedGames.length > 0 && (
                    <section className="p   b-12">
                        <h1 className="font-md font-bold p-5 text-[#FF00AE]">RELEASED GAMES</h1>
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
            <h2 className="font-xl font-semibold mb-5 ">{(game.frontmatter.title).toUpperCase()}</h2>
            <div className="flex flex-col items-center gap-13
                            md:flex-row md:justify-between md:gap-15">
                <iframe 
                    width="275"
                    src={`https://www.youtube.com/embed/${game.frontmatter?.trailer || ""}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className='rounded-lg shadow-xl/40 aspect-video 
                               sm:w-[100%]
                               md:w-[50%]'
                >
                </iframe>
                <div className="flex flex-col ml-4 items-center gap-10">
                    <p className="mb-4 font-xs">{game.frontmatter.description}</p>
                    <button 
                        className='p-5 rounded-2xl bg-[#FB62AE] text-white cursor-pointer hover:bg-gray-100 transition-colors font-bold font-sm w-50 shadow-xl/40'
                        onClick={() => navigate(`/IndvGames/${game.slug}`)}
                    >
                        SEE MORE
                    </button>                         
                </div>
            </div>
        </article>
    );
}
export default Games;
