import React from 'react';

function About () {
    const leads = [
        {name:'Nathan', role:'Art Lead', image:'assets/phillipk_nathan_portrait.png'},
        {name:'Ben', role:'Programming Lead', image:'assets/phillipk_ben_portrait.png'},
        {name:'Charlie', role:'HR', image:'assets/phillipk_charlie_portrait.png'},
        {name:'Laurence', role:'Marketing', image:'assets/phillipk_laurence_portrait_g.png'},
    ]
    const members = [
        {name:'Nathan', role:'Art Lead', image:'assets/phillipk_nathan_portrait.png'},
        {name:'Ben', role:'Programming Lead', image:'assets/phillipk_ben_portrait.png'},
        {name:'Charlie', role:'HR', image:'assets/phillipk_charlie_portrait.png'},
        {name:'Laurence', role:'Marketing', image:'assets/phillipk_laurence_portrait_g.png'},
        {name:'Nathan', role:'Art Lead', image:'assets/phillipk_nathan_portrait.png'},
        {name:'Ben', role:'Programming Lead', image:'assets/phillipk_ben_portrait.png'},
        {name:'Charlie', role:'HR', image:'assets/phillipk_charlie_portrait.png'},
        {name:'Laurence', role:'Marketing', image:'assets/phillipk_laurence_portrait_g.png'},
        {name:'Nathan', role:'Art Lead', image:'assets/phillipk_nathan_portrait.png'},
        {name:'Ben', role:'Programming Lead', image:'assets/phillipk_ben_portrait.png'},
        {name:'Charlie', role:'HR', image:'assets/phillipk_charlie_portrait.png'},
        {name:'Laurence', role:'Marketing', image:'assets/phillipk_laurence_portrait_g.png'},
    ]

    return (
        <div className="bg-beige min-h-screen">
            <div className="flex flex-col container bg-lightbeige min-h-screen items-center p-15">
                <div className="font-xl font-bold text-[#FF00AE]"> THE TEAM </div>
                <div className="flex font-lg font-bold text-[#FF00AE] pt-10 tracking-[10px]"> LEADS </div>
                <div className="flex gap-15 mb-20">
                    {leads.map((lead, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <img className="rounded-full " src={lead.image}/>
                            <div className='font-md font-bold text-[#FF00AE] pt-5'> {(lead.name).toUpperCase()} </div>
                            <div className='font-sm font-bold'> {lead.role} </div>
                        </div>
                    ))}
                </div>
                <div className="flex font-lg font-bold text-[#FF00AE] pt-10 tracking-[10px] mb-10"> MEMBERS </div>
                <div className="grid grid-cols-2 gap-15 gap-x-10">
                    {members.map((member) => (
                        <div key={member.id} className="flex items-center gap-2 items-baseline">
                            <img className="rounded-full w-50" src={member.image}/>
                            <div className='flex items-baseline gap-5'>
                                <div className='font-sm font-bold'> {member.role} </div>
                                <div className='font-md font-bold text-[#FF00AE] pt-5'> {member.name} </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) 
}
export default About;