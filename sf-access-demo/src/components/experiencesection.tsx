import AwardsSection from "./awardssection";
import EducationSection from "./educationsection";
import Skills from "./skills";

const ExperienceSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
                <Skills />
            </div>
            <div className="md:col-span-1">
                <EducationSection />
            </div>
            <div className="md:col-span-1">
                <AwardsSection />
            </div>
        </div>
    )
}

export default ExperienceSection;