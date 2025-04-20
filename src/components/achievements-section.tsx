
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: '354+ GFG & 150+ LeetCode problems solved',
    description: 'Consistently solving algorithm and data structure problems on competitive coding platforms.'
  },
  {
    title: 'Completed Kedarkantha Trek',
    description: 'Successfully completed a challenging trek to 12,500 ft altitude over 3 days and 2 nights.'
  },
  {
    title: 'NCC CATC Camps (33, 41)',
    description: 'Achieved Alpha Grade in both B & C Certificates from the National Cadet Corps.'
  },
  {
    title: 'Top 20 in Coding Blocks Aptitude Test',
    description: 'Ranked among the top 20 participants out of 9,000+ in the competitive aptitude test.'
  },
  {
    title: 'Volunteer Recognition',
    description: 'Received Mayor Appreciation for volunteer work with Yuva Kranti Foundation NGO.'
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-fade-in">
            My <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Highlights of my accomplishments both in technical and non-technical areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover-lift animate-fade-in [animation-delay:400ms]"
            >
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Trophy className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">{achievement.title}</h3>
                  <p className="text-sm text-foreground/70">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
