import teamData from '../data/AboutMeTeamMembers.json';
import TeamMember from '../components/TeamMember';

function About() {
    const members = teamData.teamMembers;

    return (
        <div className="bg-beige min-h-screen">
            <div className="flex flex-col container bg-lightbeige min-h-screen items-center p-15 text-center">
                <div className="font-xl font-bold text-[#FF00AE]"> THE TEAM </div>

                <div className="flex font-lg font-bold text-[#FF00AE] pt-10 tracking-[10px] mb-10"> MEMBERS </div>
                <div className="grid grid-cols-2 gap-15 gap-x-10 lg:grid-cols-2">
                    {members.map(member => (
                        <TeamMember key={member.name} teamMember={member} variant="member" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;