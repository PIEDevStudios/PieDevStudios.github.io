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
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {home ? (
            games.map((game, index) => (
              <div className='embla__slide' key={index}>
                {game.frontmatter.thumbnail && (
                  <img 
                    src={game.frontmatter.thumbnail} 
                    alt={game.frontmatter.title}
                    className="w-full max-h-96 object-contain"
                    loading="eager"
                  />
                )}
                <div className='flex flex-col'> 
                  <div> {game.frontmatter.title} </div>
                  <div className='pl-2'>
                    <div> {game.frontmatter.description} </div>
                    <button className='cursor-pointer self-start underline' 
                      onClick={() => navigate(`/IndvGames/${game.slug}`)} >
                      More info
                    </button>                    
                  </div>
                  {game.frontmatter.link && (
                      <a href={game.frontmatter.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                          <button className="bg-[#FB62AE] text-white p-3 rounded-lg hover:bg-[#F95BC2] transition-colors cursor-pointer"> WISHLIST </button>
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
        <div className="embla__controls">
          <button
            className="embla__button embla__button--prev"
            onClick={onPrevButtonClick}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>
          <button
            className="embla__button embla__button--next"
            onClick={onNextButtonClick}
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;