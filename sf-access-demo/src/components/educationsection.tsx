import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";

interface EducationEntryProps {
    school: string
    degree: string
    years: string
    description: string
    gpa: string
  }
  
  function EducationEntry({ school, degree, years, description, gpa }: EducationEntryProps) {
    return (
      <div className="mb-4 last:mb-0">
        <h3 className="text-lg font-semibold">{degree}</h3>
        <p className="text-sm text-muted-foreground">{school}</p>
        <p className="text-sm font-medium mt-1">{years}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <p className="text-sm text-muted-foreground mt-1">GPA: {gpa}</p>
      </div>
    )
  }


const EducationSection = () => {
    const education = [
        {
            school: "University of California, Los Angeles",
            degree: "B.S. in Computer Science & B.S. in Applied Mathematics",
            years: "2024 - 2027",
            description: "Relevant Coursework: Intro to Computer Science I, Intro to Computer Science II, Differential Equations, Discrete Structures, Physics: Oscillations, Waves, Electric and Magnetic Fields",
            gpa: "3.9"
        },
        {
            school: "Naperville North High School",
            degree: "High School Diploma",
            years: "2020 - 2024",
            description: "Relevant Coursework: AP Computer Science A, Software Engineering, AP Calculus BC,  Multivariable Calculus, Elementary Linear Algebra",
            gpa: "4.7"
        }
    ];

    return (
        <div>
            <Card className="w-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Education</CardTitle>
                </CardHeader>
                <CardContent>
                {education.map((entry, index) => (
                    <div key={index}>
                        <EducationEntry {...entry} />
                        {index < education.length - 1 && <hr className="my-4 border-gray-200" />}
                    </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )   
}

export default EducationSection;

