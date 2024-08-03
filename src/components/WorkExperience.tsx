// src/components/Layout.tsx
import Image from 'next/image';
import React from 'react';
import workExperienceData from '../../public/experience.json'; // Adjust path as needed


interface WorkExperience {
    company: string;
    title: string;
    location: string;
    date: string;
    responsibilities: string[];
    color: string;
}

const WorkExperience: React.FC = () => {
    const experienceData: WorkExperience[] = workExperienceData.work_experience;

    return (
        <div className="flex gap-8 flex-col">
            <h2 className="font-bold text-3xl">Work Experience</h2>
            {experienceData.map((experience: WorkExperience, index: number) => (
                <div key={index} className="flex flex-col gap-8">
                    <div className="flex gap-8 relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800">
                        <div className="basis-1/8">
                            <Image src={`/${experience.color}.png`} className="rounded-lg" width={50} height={50} alt="avatar" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-xl font-semibold">{experience.company}</p>
                            <p>{experience.title}</p>
                            <p className="text-zinc-400">{experience.date}</p>
                            <ul className="text-zinc-400">
                                {experience.responsibilities?.map((responsibility, idx) => (
                                    <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;