import Spotify from '../assets/icons/spotify';
import Bluesky from '../assets/icons/bluesky';
import X from '../assets/icons/x';
import Youtube from '../assets/icons/youtube';
import Instagram from '../assets/icons/instagram';
import Tiktok from '../assets/icons/tiktok';
import Linkedin from '../assets/icons/linkedin';
import Artstation from '../assets/icons/artstation';
import Patreon from '../assets/icons/patreon';


const iconMap = {
    linkedin: Linkedin,
    youtube: Youtube,
    spotify: Spotify,
    instagram: Instagram,
    tiktok: Tiktok,
    x: X,
    bluesky: Bluesky,
    artstation: Artstation,
    patreon: Patreon
}

function TeamMember({ teamMember }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <img className="rounded-full " src={teamMember.image}/>
            <div className='font-md font-bold text-[#FF00AE] pt-5'> {(teamMember.name).toUpperCase()} </div>
            <div className='font-md font-bold'> {teamMember.role} </div>
            <div className="flex gap-2">
                {teamMember.socials?.map((social, index) => {
                    const Icon = iconMap[social.icon];
                    return Icon ? (
                        <Icon key={index} width="w-6 h-6" url={social.url} />
                    ) : null;
                })}
            </div>
        </div>
    )
}

export default TeamMember;