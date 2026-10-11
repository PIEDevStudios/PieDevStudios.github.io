

function TeamMember({ teamMember }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <img className="rounded-full " src={teamMember.image}/>
            <div className='font-md font-bold text-[#FF00AE] pt-5'> {(teamMember.name).toUpperCase()} </div>
            <div className='font-md font-bold'> {teamMember.role} </div>
            <div>
                {teamMember.socials.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6" src={social.icon} alt={social.name} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default TeamMember;