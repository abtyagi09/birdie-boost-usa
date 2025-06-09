
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative bg-primary text-white p-4 rounded-full">
                  <Mail className="w-8 h-8" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Stay in the Game!</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of badminton enthusiasts and get exclusive deals, new product alerts, 
              and expert tips delivered straight to your inbox.
            </p>
            <div className="flex items-center gap-2 bg-primary/10 p-2 rounded-lg mb-6 max-w-md mx-auto">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Get 10% off your first order!</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-12 text-lg"
              />
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
