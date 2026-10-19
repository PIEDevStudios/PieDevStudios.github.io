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
import Linkedin from '../assets/icons/linkedin';

function Footer () {
    return (
        <div className="flex bottom-0 bg-orange p-4 py-10">
            <div className="margin flex justify-items-center justify-between items-center w-full px-0">
                <div className='grid grid-flow-col gap-4 grid-rows-3
                                sm:grid-rows-2 px-5'>
                    <Discord width={"footerlogos"} />
                    <Steam width={"footerlogos"}/> 
                    <Itch width={"footerlogos"}/>
                    <Spotify width={"footerlogos"} url={"https://open.spotify.com/artist/5k0LT9lNbjoccjcYZQ12fB"}/>
                    <Bluesky width={"footerlogos"} url={"https://bsky.app/profile/piedevs.bsky.social"}/>
                    <X width={"footerlogos"} url={"https://x.com/PieDevStudios"}/>
                    <Youtube width={"footerlogos"} url={"https://www.youtube.com/@PIEDevs"}/>
                    <Instagram width={"footerlogos"} url={"https://www.instagram.com/pie.devs/"}/>
                    <Tiktok width={"footerlogos"} url={"https://www.tiktok.com/@piedevs"}/>
                    <Linkedin width={"footerlogos"} url={"https://www.linkedin.com/company/pie-dev-studios/"}/>
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