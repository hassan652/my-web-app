import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Heart, Users, BookOpen, Zap } from "lucide-react";
import hassanProfile from "@/assets/hassan-profile.jpg";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Education First",
      description: "Making complex AI concepts accessible to everyone, regardless of their technical background."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a supportive community where learners help each other grow and succeed."
    },
    {
      icon: Zap,
      title: "Practical Learning",
      description: "Focusing on hands-on projects and real-world applications of AI technologies."
    },
    {
      icon: Heart,
      title: "Passion for AI",
      description: "Genuinely excited about AI's potential to transform how we work and create."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    About{" "}
                    <span className="text-primary">
                      Hassan
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    I'm passionate about making AI education accessible to everyone. 
                    Through comprehensive tutorials, community building, and hands-on 
                    projects, I help people navigate the exciting world of artificial intelligence.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary-hover">
                      <Mail className="w-4 h-4 mr-2" />
                      Get in Touch
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      View My Work
                    </Button>
                  </div>
                </div>
                
                <div className="animate-slide-up">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                    <img
                      src={hassanProfile}
                      alt="Hassan - AI Educator"
                      className="relative w-full max-w-md mx-auto rounded-3xl shadow-card hover-lift"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as curiosity about machine learning has evolved into a mission 
                  to democratize AI education. I've seen firsthand how proper guidance can 
                  transform someone's understanding of AI from intimidating to empowering.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="bg-card shadow-card hover-lift border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">The Problem I Saw</h3>
                    <p className="text-muted-foreground">
                      AI education was either too academic or too superficial. People needed 
                      practical, step-by-step guidance that bridges theory with real-world applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card shadow-card hover-lift border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">My Solution</h3>
                    <p className="text-muted-foreground">
                      Create comprehensive tutorials that anyone can follow, build a supportive 
                      community, and focus on hands-on projects that demonstrate real value.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">What Drives Me</h2>
                <p className="text-lg text-muted-foreground">
                  These core values guide everything I do in AI education and community building.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card 
                    key={value.title} 
                    className="bg-background shadow-card hover-lift border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl flex-shrink-0">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <p className="text-lg text-muted-foreground">
                  Have questions about AI? Want to collaborate? Or just want to say hi? 
                  I'd love to hear from you!
                </p>
              </div>
              
              <div className="animate-slide-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;