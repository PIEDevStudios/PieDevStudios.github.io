// import useGamePosts from "../hooks/useGamePosts";
// import { useParams } from 'react-router-dom';
// import EmblaCarousel from "../components/EmblaCarousel.jsx";

// function HomeCarousel({game, index}) {
//     const OPTIONS = { loop: true }
//     const { slug } = useParams();
//     const { games, loading, error } = useGamePosts(slug);

//     if (loading) return <div>Loading games...</div>;
//     if (error) return <div>Error: {error}</div>;
//     const game = games.find(b => b.slug === slug);
//     if (!game) return <div>game not found</div>;

//     return (
//         <div className="bg-brown p-50 text-white">
//             <EmblaCarousel game={game} description={true} options={OPTIONS} />
//         </div>
//     );
// }
// export default HomeCarousel;