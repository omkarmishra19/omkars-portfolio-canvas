
import { 
  CSharp, 
  Javascript,
  Css,
  Html,
  React as ReactIcon,
  Nodejs,
  Github,
  Database
} from 'lucide-react';

const languages = [
  { name: 'C++', icon: CSharp },
  { name: 'JavaScript', icon: Javascript },
  { name: 'C', icon: CSharp },
  { name: 'Java', icon: Javascript },
];

const frameworks = [
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css },
  { name: 'Express.js', icon: Nodejs },
  { name: 'Node.js', icon: Nodejs },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Tailwind CSS', icon: Css },
];

const tools = [
  { name: 'MySQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'GitHub', icon: Github },
];

const softSkills = [
  'Communication',
  'Collaboration',
  'Leadership',
  'Time Management',
  'Flexibility',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-fade-in">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Here are the technologies and skills I've been working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in [animation-delay:400ms]">
          {/* Languages */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border hover-lift">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">
                <Javascript className="h-4 w-4" />
              </span>
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary transition-colors">
                  <lang.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border hover-lift">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">
                <ReactIcon className="h-4 w-4" />
              </span>
              Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((framework) => (
                <div key={framework.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary transition-colors">
                  <framework.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{framework.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border hover-lift">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">
                <Database className="h-4 w-4" />
              </span>
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary transition-colors">
                  <tool.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border hover-lift">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
