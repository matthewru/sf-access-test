"use client";
import { useState, useEffect } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ChartTooltip } from "./ui/chart";
import { Rocket } from "lucide-react";
const Skills = () => {
    const [isClient, setIsClient] = useState(false);
    const skills = [
        { name: "Python", Value: 90 },
        { name: "C++", Value: 95 },
        { name: "JavaScript", Value: 90 },
        { name: "HTML/CSS", Value: 90 },
        { name: "Swift", Value: 75 },
        { name: "Java", Value: 80 }
    ];

    useEffect(() => {
        // This will only run on the client
        setIsClient(true);
    }, []);

    return (
        <Card className="w-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4-center">
                    <Rocket className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Skills</CardTitle>
                </CardHeader>
            <CardContent className="flex justify-center items-center">
                <div className="h-[300px] w-full">
                    {isClient ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skills}>
                                <defs>
                                    <radialGradient id="skillColorGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.9} />
                                        <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                                    </radialGradient>
                                </defs>
                                <PolarGrid />
                                <PolarAngleAxis 
                                    dataKey="name" 
                                    className="text-sm font-bold text-muted-foreground" 
                                />
                                <ChartTooltip 
                                    contentStyle={{ 
                                        borderColor: 'hsl(var(--border))',
                                        borderRadius: '0.5rem',
                                        boxShadow: 'var(--shadow)'
                                    }} 
                                />
                                <Radar 
                                    dataKey="Value" 
                                    fill="url(#skillColorGradient)"
                                    fillOpacity={0.7}
                                    stroke="hsl(var(--primary))" 
                                    strokeWidth={2}
                                    dot={true}
                                    activeDot={{ 
                                        r: 4, 
                                        fill: 'hsl(var(--primary))',
                                        strokeWidth: 2,
                                        stroke: 'hsl(var(--background))'
                                    }} 
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full w-full flex items-center justify-center text-muted-foreground animate-pulse">
                            <p className="text-center">Loading skills chart...</p>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground pt-0">
                <p>Skill proficiency scale: 0-100</p>
            </CardFooter>
        </Card>
    );
};

export default Skills;