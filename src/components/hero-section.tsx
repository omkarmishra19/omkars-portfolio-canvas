import { ArrowRight, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Omkar_Mishra_Resume.pdf'; // Assuming resume is in public folder
    link.download = 'Omkar_Mishra_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in [animation-delay:200ms]">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              Omkar Mishra
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
              Full Stack Developer | MERN Stack | DSA Enthusiast
            </h2>
            <p className="text-lg text-foreground/70 max-w-lg mb-8">
              I design and build modern web applications with a focus on clean code, performance, and user experience.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="group">
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-slide-right" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleResumeDownload}
                className="group"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:animate-slide-right" />
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="mailto:omkarmishra82524@gmail.com" 
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                omkarmishra82524@gmail.com
              </a>
              <a 
                href="tel:+918252456615" 
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91-8252456615
              </a>
              <a 
                href="https://github.com/omkarmishra19" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                github.com/omkarmishra19
              </a>
              <a 
                href="https://linkedin.com/in/omkar-mishralpu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/omkar-mishralpu
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block animate-fade-in [animation-delay:400ms]">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 absolute -top-10 -right-10 blur-3xl z-0"></div>
              <div className="relative z-10 bg-card rounded-2xl shadow-xl p-8 border border-border">
                <div className="h-56 w-56 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary/30">
                <img
  src="/profile.png"
  alt="Omkar Mishra"
  className="w-full h-full object-cover rounded-full mx-auto"
/>

                </div>
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold">Omkar Mishra</h3>
                  <p className="text-foreground/70">Computer Science Undergraduate</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="https://github.com/omkarmishra19" target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com/in/omkar-mishralpu" target="_blank" rel="noopener noreferrer"
                       className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:omkarmishra82524@gmail.com"
                       className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
