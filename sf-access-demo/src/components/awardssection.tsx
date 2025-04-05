import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Trophy } from "lucide-react";
import { Badge } from "./ui/badge";

interface AwardEntryProps {
    award: string
    year: string
    description: string
    type: string
    organization: string
  }
  
  function AwardEntry({ award, year, description, type, organization }: AwardEntryProps) {
    return (
        <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{award}</h3>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {year}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{organization}</span>
          {type && (
            <Badge variant="outline" className="text-xs">
              {type}
            </Badge>
          )}
        </div>

        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
    )
  }


const AwardsSection = () => {
    const awards = [
        {
            award: "Hack Merced 1st Place",
            year: "2025",
            description: "1st Place Business and FinTech Track; Best Use of Google Gemini API",
            type: "Hackathon",
            organization: "HackMerced"
        },
        {
            award: "National Merit Scholar",
            year: "2024",
            description: "Scored in the top 2% of PSAT scores in the state of Illinois and was one of 6,870 nationally to be awarded the scholarship",
            type: "Academic",
            organization: "NMSC"
        }
    ];

    return (
        <div>
            <Card className="w-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4-center">
                    <Trophy className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Awards</CardTitle>
                </CardHeader>
                <CardContent>
                {awards.map((entry, index) => (
                    <div key={index}>
                        <AwardEntry {...entry} />
                        {index < awards.length - 1 && <hr className="my-4 border-gray-200" />}
                    </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )   
}

export default AwardsSection;

