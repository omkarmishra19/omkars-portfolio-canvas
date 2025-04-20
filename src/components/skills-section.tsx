
import { 
  Code, 
  FileCode,
  FileJson,
  Layout,
  Workflow,
  Server,
  Database,
  Github,
  Users
} from 'lucide-react';

const languages = [
  { name: 'C++', icon: Code },
  { name: 'JavaScript', icon: FileJson },
  { name: 'C', icon: Code },
  { name: 'Java', icon: FileCode },
];

const frameworks = [
  { name: 'HTML', icon: Layout },
  { name: 'CSS', icon: Layout },
  { name: 'Express.js', icon: Server },
  { name: 'Node.js', icon: Server },
  { name: 'React.js', icon: Workflow },
  { name: 'Tailwind CSS', icon: Layout },
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
                <FileCode className="h-4 w-4" />
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
                <Workflow className="h-4 w-4" />
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
                <Users className="h-4 w-4" />
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
