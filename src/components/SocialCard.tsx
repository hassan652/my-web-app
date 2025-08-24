import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SocialCardProps {
  icon: LucideIcon;
  platform: string;
  handle: string;
  kpi: string;
  href: string;
}

const SocialCard = ({ icon: Icon, platform, handle, kpi, href }: SocialCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover-lift"
    >
      <Card className="h-full transition-smooth hover:shadow-card bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{platform}</h3>
              <p className="text-muted-foreground text-sm">{handle}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl font-bold text-primary">
              {kpi}
            </p>
            <p className="text-sm text-muted-foreground">
              Join the community →
            </p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default SocialCard;