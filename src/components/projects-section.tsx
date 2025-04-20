
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Website',
    subtitle: 'Hotel Booking App',
    description: 'A full-featured hotel booking platform with real-time pricing, CRUD operations, and MongoDB integration. The application handles user authentication with JWT and maintains 99.9% uptime.',
    tags: ['MERN Stack', 'REST APIs', 'JWT Auth', '500+ users'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  },
  {
    title: 'Vasudeva Stores Website',
    subtitle: 'Full-Stack Grocery App',
    description: 'A comprehensive grocery platform with user authentication, search functionality, and a shopping cart feature. The application improved order management by 30%.',
    tags: ['React', 'MongoDB', 'Login/Signup', 'Search', 'Cart'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  },
  {
    title: 'Notes App',
    subtitle: 'React-based Note Taking',
    description: 'A lightweight note-taking application that allows users to add, edit, and delete notes. Data is saved in local storage for persistence.',
    tags: ['React', 'Local Storage', 'CRUD Operations'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-fade-in">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden border border-border hover-lift animate-fade-in [animation-delay:400ms]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-sm text-foreground/70">{project.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
