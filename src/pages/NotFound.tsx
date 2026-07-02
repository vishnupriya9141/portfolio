import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 md:px-8 text-center">
        <FadeInUp>
          <Card className="p-8 md:p-12">
            <h1 className="text-6xl md:text-7xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/" replace>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </Card>
        </FadeInUp>
      </div>
    </main>
  );
}

