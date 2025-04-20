
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2022–2026',
    score: 'CGPA: 7.01',
    icon: GraduationCap,
  },
  {
    institution: 'J D Public School',
    degree: 'Higher Secondary Education',
    period: '2018–2020',
    score: 'CGPA: 7.41',
    icon: BookOpen,
  },
  {
    institution: 'Chapra Central School',
    degree: 'Secondary Education',
    period: '2017–2018',
    score: 'CGPA: 9.43',
    icon: BookOpen,
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-fade-in">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="animate-fade-in [animation-delay:400ms]">
                <div className="flex">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-px h-full bg-border mt-2"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover-lift flex-1 mb-8">
                    <CardHeader className="p-0 pb-3">
                      <CardTitle className="text-lg">{item.institution}</CardTitle>
                      <p className="text-foreground/70 text-sm">{item.degree}</p>
                    </CardHeader>
                    <CardContent className="p-0 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                        <span className="text-sm font-medium">{item.score}</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
