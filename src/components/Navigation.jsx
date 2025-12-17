import { Link } from 'react-router-dom';
import pieLogo from '/assets/piedevlogo.png';

function Navigation () {
    return (
        <div className="bg-orange py-2 sticky top-0 z-50000 sm:py-4">
            <div className="margin px-10 text-dbrown flex justify-between items-center">
                <Link to="/"><img src={pieLogo} className="pielogo aspect-square"/></Link>
                <div className="flex gap-4 font-sm">
                    <Link className="hover:text-white" to="/"> Home </Link>
                    <Link className="hover:text-white" to="/Games"> Games </Link>
                    <Link className="hover:text-white" to="/Blog"> Blog </Link>
                    <Link className="hover:text-white" to="/About"> About </Link>
                    <a className="hover:text-white" href="https://linktr.ee/PieDev" target="_blank" rel="noopener noreferrer"> Socials </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;