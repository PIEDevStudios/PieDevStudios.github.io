import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { usePrevNextButtons } from '../hooks/EmblaCarouselArrowButtons';
import { useNavigate } from 'react-router';
import '../pages/embla.css';

const EmblaCarousel = (props) => {
  const navigate = useNavigate(); 
  const { games, options, home } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const {
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [games, emblaApi]);

  return (
    <div className="embla flex place-content-center relative text-white">
      
      <div className="bg-[#ACA17C] overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom z-501">
          {home ? (
            games.map((game, index) => (
              <div className='embla__slide ' key={index}>
                {game.frontmatter.thumbnail && (
                  <img 
                    src={game.frontmatter.thumbnail} 
                    alt={game.frontmatter.title}
                    className="max-h-225 object-contain"
                    loading="eager"
                  />
                )}
                <div className='absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-[#ACA17C] via-30% from-0.5% z-1'/>
                <div className='relative z-2 flex flex-col gap-5 p-20 max-w-[30vw]'> 
                  <div className='font-lg font-bold'> {game.frontmatter.title} </div>
                  <div className='pl-8 font-xs flex flex-col gap-10'>
                    <div> {game.frontmatter.description} </div>
                    <button className='cursor-pointer self-start font-bold underline' 
                      onClick={() => navigate(`/IndvGames/${game.slug}`)} >
                      More info
                    </button>                    
                  </div>
                  {game.frontmatter.link && (
                      <a href={game.frontmatter.link} target="_blank" rel="noopener noreferrer" className="no-underline flex justify-center">
                          <button className="bg-[#DB4598] text-white font-bold p-5 px-15 rounded-[1.25rem] hover:bg-[#F95BC2] transition-colors shadow-2xl cursor-pointer font-sm"> WISHLIST </button>
                      </a>
                  )} 
                </div>
              </div>
            ))
          ) : (
            games[0]?.frontmatter?.imageCarousel?.map((img, index) => (
              <div className="embla__slide" key={index}>
                <img 
                  src={img} 
                  alt={`Game screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            ))
          )}
        </div>
      </div>
      {games.length > 1 && (
        <div className="absolute bottom-0 gap-20 m-5 justify-between flex opacity-75 z-501">
          <button
            className="embla__button"
            onClick={onPrevButtonClick}
          >
            <svg viewBox="-5 0 24 24"> <g transform="translate(-421.000000, -1195.000000)" fill="#ffffff"> <path d="M423.429,1206.98 L434.686,1196.7 C435.079,1196.31 435.079,1195.67 434.686,1195.28 C434.293,1194.89 433.655,1194.89 433.263,1195.28 L421.282,1206.22 C421.073,1206.43 420.983,1206.71 420.998,1206.98 C420.983,1207.26 421.073,1207.54 421.282,1207.75 L433.263,1218.69 C433.655,1219.08 434.293,1219.08 434.686,1218.69 C435.079,1218.29 435.079,1217.66 434.686,1217.27 L423.429,1206.98" id="chevron-left" sketch:type="MSShapeGroup"/> </g></svg>
          </button>
          <button
            className="embla__button"
            onClick={onNextButtonClick}
          >
            <svg width="64px" height="64px" viewBox="-5 0 24 24"> <g transform="translate(-473.000000, -1195.000000)" fill="#ffffff"> <path d="M486.717,1206.22 L474.71,1195.28 C474.316,1194.89 473.678,1194.89 473.283,1195.28 C472.89,1195.67 472.89,1196.31 473.283,1196.7 L484.566,1206.98 L473.283,1217.27 C472.89,1217.66 472.89,1218.29 473.283,1218.69 C473.678,1219.08 474.316,1219.08 474.71,1218.69 L486.717,1207.75 C486.927,1207.54 487.017,1207.26 487.003,1206.98 C487.017,1206.71 486.927,1206.43 486.717,1206.22"/> </g></svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;