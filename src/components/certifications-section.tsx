
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'GeeksforGeeks DSA Trainee',
    period: 'May–Aug 2024',
    organization: 'GeeksforGeeks',
    description: 'Intensive training program focusing on advanced data structures and algorithms.'
  },
  {
    title: 'GFG DSA Course',
    period: 'May–Jul 2024',
    organization: 'GeeksforGeeks',
    description: 'Comprehensive course covering Java and C++ implementations of data structures and algorithms.'
  },
  {
    title: 'Node.js and Algorithms',
    period: 'Apr–May 2024',
    organization: 'Coursera',
    description: 'Certification in Node.js backend development and algorithm optimization.'
  },
  {
    title: 'DSA in C/C++',
    period: 'Jan–Feb 2024',
    organization: 'Udemy',
    description: 'In-depth exploration of data structures and algorithms using C and C++.'
  },
  {
    title: 'Cloud Computing',
    period: 'Jul–Oct 2024',
    organization: 'NPTEL - IIT Kharagpur',
    description: 'Advanced cloud computing concepts and implementations. Completed with 72% score.'
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-fade-in">
            Training & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            I'm constantly learning and improving my skills through various training programs and certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="hover-lift animate-fade-in [animation-delay:400ms]">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm text-foreground/70">
                  {cert.period} | {cert.organization}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
