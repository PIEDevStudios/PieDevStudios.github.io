import { Link } from 'react-router-dom';
import pieLogo from '/assets/piedevlogo.png';
import Discord from '../assets/icons/discord';
import Steam from '../assets/icons/steam';
import Itch from '../assets/icons/itch';
import Spotify from '../assets/icons/spotify';
import Bluesky from '../assets/icons/bluesky';
import X from '../assets/icons/x';
import Youtube from '../assets/icons/youtube';
import Instagram from '../assets/icons/instagram';
import Tiktok from '../assets/icons/tiktok';

function Footer () {
    return (
        <div className="bottom-0 bg-orange p-4 flex">
            <div className="margin flex justify-items-center justify-between align-items-center w-full px-10 n">
                <div className='grid grid-flow-col sm:grid-rows-4 md:grid-rows-3 lg:grid-rows-2 gap-4'>
                    <Discord />          
                    <Steam /> 
                    <Itch />
                    <Spotify />
                    <Bluesky />
                    <X />
                    <Youtube />
                    <Instagram />
                    <Tiktok />
                </div>
                <Link to="/"><img src={pieLogo} className="aspect-square w-[5vw]"/></Link>
                <div className='justify-items-end'>
                    <div className='flex gap-4 underline font-bold text-[#FA558C] text-[1vw]'> 
                        <Link className="hover:text-white" to="/"> Home </Link>
                        <Link className="hover:text-white" to="/Games"> Games </Link>
                        <Link className="hover:text-white" to="/Blog"> Blog </Link>
                        <Link className="hover:text-white" to="/About"> About </Link>
                    </div>
                    <div className='text-white text-[0.8vw] mt-2'>
                        Copyright © 2025 PIEDev Studios
                    </div>                    
                </div>

            </div>
        </div>
    )
}

export default Footer;