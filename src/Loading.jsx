import pieLogo from '/assets/piedevlogo.png';

function Loading ({ isExiting = false }) {
    return (    
        <div className={`bg-beige flex justify-center items-center gap-5 page-animation ${isExiting ? 'page-exit' : ''}`}> 
            <div className='font-loading font-bold gap-2 loading justify-center items-center flex'> 
                <span style={{ '--i': 1 }}> <img src={pieLogo} className="aspect-square w-[10vw]"/> </span>
                <span style={{ '--i': 2 }}> P </span>
                <span style={{ '--i': 3 }}> I </span>
                <span style={{ '--i': 4 }}> E </span>
                <span style={{ '--i': 5 }}> D </span>
                <span style={{ '--i': 6 }}> e </span>
                <span style={{ '--i': 7 }}> v </span>
                <span style={{ '--i': 8 }}> S </span>
                <span style={{ '--i': 9 }}> t </span>
                <span style={{ '--i': 10 }}> u </span>
                <span style={{ '--i': 11 }}> d </span>
                <span style={{ '--i': 12 }}> i </span>
                <span style={{ '--i': 13 }}> o </span>
                <span style={{ '--i': 14 }}> s </span>
            </div>
        </div>
    )
}

export default Loading;