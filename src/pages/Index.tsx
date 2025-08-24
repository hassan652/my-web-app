import Navigation from "@/components/Navigation";
import SocialCard from "@/components/SocialCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Youtube, 
  MessageSquare, 
  Twitter, 
  Linkedin, 
  PlayCircle, 
  Users, 
  Eye,
  BookOpen,
  ArrowRight,
  Star
} from "lucide-react";
import hassanLogo from "@/assets/hassan-logo.jpg";

const Index = () => {
  const socialStats = [
    {
      icon: Youtube,
      platform: "YouTube",
      handle: "@hassanai",
      kpi: "300K+ Views",
      href: "https://youtube.com/@hassanai"
    },
    {
      icon: MessageSquare,
      platform: "Discord",
      handle: "Hassan's AI Hub",
      kpi: "400+ Students",
      href: "https://discord.gg/hassanai"
    },
    {
      icon: Twitter,
      platform: "Twitter",
      handle: "@hassan_ai_edu",
      kpi: "15K+ Followers",
      href: "https://twitter.com/hassan_ai_edu"
    },
    {
      icon: Linkedin,
      platform: "LinkedIn",
      handle: "Hassan AI",
      kpi: "8K+ Connections",
      href: "https://linkedin.com/in/hassanai"
    }
  ];

  const features = [
    {
      icon: PlayCircle,
      title: "Video Tutorials",
      description: "Step-by-step AI tutorials that anyone can follow"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of AI learners and practitioners"
    },
    {
      icon: BookOpen,
      title: "Practical Projects",
      description: "Hands-on projects that demonstrate real-world AI applications"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 animate-fade-in">
                <img 
                  src={hassanLogo} 
                  alt="Hassan AI Logo" 
                  className="w-24 h-24 mx-auto rounded-2xl shadow-hero hover-lift"
                />
              </div>
              
              <div className="animate-slide-up">
                <Badge variant="secondary" className="mb-6 px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  AI Education Specialist
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
                  Hassan
                </h1>
                
                <p className="text-2xl lg:text-3xl font-semibold mb-8 text-muted-foreground">
                  Taking over AI,{" "}
                  <span className="text-primary font-bold">
                    step by step
                  </span>
                </p>
                
                <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Empowering the next generation of AI practitioners through comprehensive tutorials, 
                  hands-on projects, and a supportive learning community.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover shadow-soft">
                    <Youtube className="w-5 h-5 mr-2" />
                    Watch Tutorials
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Join Discord
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Join the{" "}
                  <span className="text-primary">
                    Community
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Connect with me across different platforms and become part of a growing 
                  community of AI enthusiasts and learners.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
                {socialStats.map((social, index) => (
                  <div
                    key={social.platform}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SocialCard {...social} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  What You'll{" "}
                  <span className="text-primary">
                    Learn
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive AI education designed for practical application and real-world success.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card 
                    key={feature.title}
                    className="bg-background shadow-card hover-lift animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl w-fit mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Embed Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Latest{" "}
                  <span className="text-primary">
                    Tutorial
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Watch my most recent AI tutorial and start your learning journey today.
                </p>
              </div>
              
              <Card className="bg-card shadow-card overflow-hidden animate-slide-up border">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle className="w-20 h-20 text-primary mb-4 mx-auto" />
                      <p className="text-lg font-medium mb-2">Featured Tutorial</p>
                      <p className="text-muted-foreground">
                        "Building Your First AI Model - Complete Beginner's Guide"
                      </p>
                      <Button className="mt-4 bg-primary hover:bg-primary-hover">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Master AI?
              </h2>
              <p className="text-lg lg:text-xl mb-8 opacity-90">
                Join thousands of students who are already taking over AI, step by step. 
                Start your journey today with free tutorials and community support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="hover-lift bg-white text-primary hover:bg-gray-100">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe to Channel
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary transition-smooth"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Join Discord Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Get{" "}
                  <span className="text-primary">
                    Started
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have a question about AI or want to collaborate? 
                  I'd love to hear from you and help you on your AI journey.
                </p>
              </div>
              
              <div className="animate-slide-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <img 
                  src={hassanLogo} 
                  alt="Hassan AI Logo" 
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-lg font-semibold">Hassan AI</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="/" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  About
                </a>
                <a 
                  href="mailto:ai.with.hassan@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </a>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-muted-foreground">
                © 2024 Hassan AI. Taking over AI, step by step.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
