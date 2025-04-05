import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

const ProjectCard = ({title, description, image, technologies, projectType, lastUpdated}: 
    {title: string, description: string, image: string, link: string, technologies: string[], projectType: string, lastUpdated: string}) => {
    return (
        <Card className="w-full relative transition-all hover:shadow-lg p-0">
            <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image src={image} alt={title} fill className="object-cover transition-transform hover:scale-105" />
            </div>
            <div className="absolute right-3 top-3 z-10">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {projectType}
                </Badge>
            </div>
            <div className="p-6">
                <CardHeader className="p-0">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                    <div className="space-y-4">
                        <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Technologies</h3>
                            <div className="mt-2 flex flex-wrap gap-2">
                            
                                {technologies.map((technology) => (
                                    <Badge 
                                    key={technology} 
                                    variant="outline" 
                                    className="flex items-center gap-1"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                                        {technology}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Last updated</h3>
                            <p className="mt-1 text-sm">{lastUpdated}</p>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}

export default ProjectCard;

