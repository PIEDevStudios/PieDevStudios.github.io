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
            <div className="margin flex justify-items-center justify-between items-center w-full px-0">
                <div className='grid grid-flow-col gap-4 grid-rows-3
                                sm:grid-rows-2 px-5'>
                    <Discord width={"footerlogos"} />          
                    <Steam width={"footerlogos"}/> 
                    <Itch width={"footerlogos"}/>
                    <Spotify width={"footerlogos"}/>
                    <Bluesky width={"footerlogos"}/>
                    <X width={"footerlogos"}/>
                    <Youtube width={"footerlogos"}/>
                    <Instagram width={"footerlogos"}/>
                    <Tiktok width={"footerlogos"}/>
                </div>
                <Link to="/"><img src={pieLogo} className="pielogo aspect-square"/></Link>
                <div className='justify-items-end'>
                    <div className='grid grid-flow-col gap-1 underline font-bold text-[#FA558C] font-sm grid-rows-2
                                    lg:gap-4
                                    md:gap-3
                                    sm:gap-2 sm:grid-rows-none'> 
                        <Link className="hover:text-white" to="/"> Home </Link>
                        <Link className="hover:text-white" to="/Games"> Games </Link>
                        <Link className="hover:text-white" to="/Blog"> Blog </Link>
                        <Link className="hover:text-white" to="/About"> About </Link>
                    </div>
                    <div className='text-white font-xs mt-2 text-wrap max-w-[100px] sm:max-w-full'>
                        Copyright © 2025 PIEDev Studios
                    </div>                    
                </div>

            </div>
        </div>
    )
}

export default Footer;