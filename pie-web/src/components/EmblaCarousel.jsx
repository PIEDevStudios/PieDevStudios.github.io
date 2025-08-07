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
    Autoplay({ delay: 7000, stopOnInteraction: false })
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
    <div className="embla relative text-white">
      {home ? (
        <div className='flex place-content-center'>
          <div className="bg-[#ACA17C] overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom z-501">
              {games.map((game, index) => (
                <div key={index} className='embla__slide flex flex-col
                                      2xl:pr-30
                                      xl:pr-20
                                      sm:pr-0 sm:flex-row'>
                  {game.frontmatter.thumbnail && (
                    <div className="relative 
                                2xl:basis-5/7
                                sm:basis-5/9">
                      <img 
                        src={game.frontmatter.thumbnail} 
                        alt={game.frontmatter.title}
                        className="w-full h-full max-h-[73vh] min-h-[300px] object-cover place-content-start"
                        loading="eager"
                      />
                      <div className='absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-[#ACA17C] via-30% from-0.5% z-1'/>
                    </div>
                  )}
                  <div className='z-2 p-5 w-full bg-[#ACA17C] 
                              2xl:basis-2/7
                              md:p-10 xl:p-20 
                              sm:basis-4/9'> 
                    <div className='flex flex-col justify-between h-full sm:gap-0'>
                      <div className='flex flex-col xl:gap-10 sm:gap-5'>
                        <div className='font-lg font-bold sm:pl-0'> 
                          {game.frontmatter.title} 
                        </div>
                        <div className='flex flex-col pl-8 font-xs gap-10 max-w-[40rem] 
                                        xl:pl-8 xl:gap-10
                                        sm:gap-5 sm:pl-0'>
                          <div>{game.frontmatter.description}</div>
                          <button 
                            className='cursor-pointer self-start font-bold underline' 
                            onClick={() => navigate(`/IndvGames/${game.slug}`)}
                          >
                            More info
                          </button>       
                        </div>
                      </div>
                      {game.frontmatter.link && (
                        <div className="mt-4 md:mt-0">
                          <a href={game.frontmatter.link} target="_blank" rel="noopener noreferrer" className="no-underline flex justify-center">
                            <button className="bg-[#DB4598] hover:bg-[#F95BC2] text-white font-sm font-bold transition-colors shadow-xl/30 cursor-pointer rounded-lg p-3 mt-1 mb-10
                                            2xl:mb-30
                                            xl:p-5 xl:px-15 xl:mb-20
                                            md:mt-6
                                            sm:font-xs sm:p-3 sm:px-8 sm:mt-4 sm:rounded-[1vw]"> 
                              WISHLIST 
                            </button>
                          </a>
                        </div>
                      )} 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {games.length > 1 && (
            <div className="absolute bottom-0 gap-20 m-5 justify-between flex opacity-75 self-center z-501">
              <button
                className="embla__button"
                onClick={onPrevButtonClick}
              >
                <svg viewBox="-5 0 24 24" className='w-[32px] md:w-[64px]'> 
                  <g transform="translate(-421.000000, -1195.000000)" fill="#ffffff"> 
                    <path d="M423.429,1206.98 L434.686,1196.7 C435.079,1196.31 435.079,1195.67 434.686,1195.28 C434.293,1194.89 433.655,1194.89 433.263,1195.28 L421.282,1206.22 C421.073,1206.43 420.983,1206.71 420.998,1206.98 C420.983,1207.26 421.073,1207.54 421.282,1207.75 L433.263,1218.69 C433.655,1219.08 434.293,1219.08 434.686,1218.69 C435.079,1218.29 435.079,1217.66 434.686,1217.27 L423.429,1206.98" id="chevron-left" sketch:type="MSShapeGroup"/> 
                  </g>
                </svg>
              </button>
              <button
                className="embla__button"
                onClick={onNextButtonClick}
              >
                <svg viewBox="-5 0 24 24" className='w-[32px] md:w-[64px]'> 
                  <g transform="translate(-473.000000, -1195.000000)" fill="#ffffff"> 
                    <path d="M486.717,1206.22 L474.71,1195.28 C474.316,1194.89 473.678,1194.89 473.283,1195.28 C472.89,1195.67 472.89,1196.31 473.283,1196.7 L484.566,1206.98 L473.283,1217.27 C472.89,1217.66 472.89,1218.29 473.283,1218.69 C473.678,1219.08 474.316,1219.08 474.71,1218.69 L486.717,1207.75 C486.927,1207.54 487.017,1207.26 487.003,1206.98 C487.017,1206.71 486.927,1206.43 486.717,1206.22"/> 
                  </g>
                </svg>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='bg-[#F4D486]'>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom z-501">
              {games[0]?.frontmatter?.imageCarousel?.map((img, index) => (
                <div className="embla__slide p-20" key={index}>
                  <img 
                    src={img} 
                    alt={`Game screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
          {games.length > 1 && (
            <div className="absolute flex bottom-[50%] m-5 opacity-75 self-center w-full z-501">
              <button
                className="embla__button absolute left-0"
                onClick={onPrevButtonClick}
              >
                <svg viewBox="-5 0 24 24" className='w-[32px] md:w-[64px]'> 
                  <g transform="translate(-421.000000, -1195.000000)" fill="#ffffff"> 
                    <path d="M423.429,1206.98 L434.686,1196.7 C435.079,1196.31 435.079,1195.67 434.686,1195.28 C434.293,1194.89 433.655,1194.89 433.263,1195.28 L421.282,1206.22 C421.073,1206.43 420.983,1206.71 420.998,1206.98 C420.983,1207.26 421.073,1207.54 421.282,1207.75 L433.263,1218.69 C433.655,1219.08 434.293,1219.08 434.686,1218.69 C435.079,1218.29 435.079,1217.66 434.686,1217.27 L423.429,1206.98" id="chevron-left" sketch:type="MSShapeGroup"/> 
                  </g>
                </svg>
              </button>
              <button
                className="embla__button absolute right-0"
                onClick={onNextButtonClick}
              >
                <svg viewBox="-5 0 24 24" className='w-[32px] md:w-[64px]'> 
                  <g transform="translate(-473.000000, -1195.000000)" fill="#ffffff"> 
                    <path d="M486.717,1206.22 L474.71,1195.28 C474.316,1194.89 473.678,1194.89 473.283,1195.28 C472.89,1195.67 472.89,1196.31 473.283,1196.7 L484.566,1206.98 L473.283,1217.27 C472.89,1217.66 472.89,1218.29 473.283,1218.69 C473.678,1219.08 474.316,1219.08 474.71,1218.69 L486.717,1207.75 C486.927,1207.54 487.017,1207.26 487.003,1206.98 C487.017,1206.71 486.927,1206.43 486.717,1206.22"/> 
                  </g>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;