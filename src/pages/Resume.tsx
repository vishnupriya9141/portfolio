import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/data/content";
import { FadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

function PdfBlobViewer({ url }: { url: string }) {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        if (!cancelled && blob) {
          const blobUrl = URL.createObjectURL(blob);
          setObjectUrl(blobUrl);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to load resume.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [url]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-text-secondary">
        Loading resume...
      </div>
    );
  }

  if (error || !objectUrl) {
    return (
      <div className="flex items-center justify-center py-20 text-red-500">
        {error || "Failed to load resume PDF. Please try downloading it instead."}
      </div>
    );
  }

  return (
    <object
      data={objectUrl}
      type="application/pdf"
      className="w-full h-[85vh] border-0"
    >
      <div className="flex items-center justify-center py-20 text-text-secondary">
        Your browser does not support inline PDF viewing.
      </div>
    </object>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen">
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent mb-8 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to project
            </Link>
          </FadeInUp>

          <FadeInUp>
            <Card className="p-0 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-border text-center">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {SITE_CONFIG.name} — Resume
                </h1>
              </div>

              <div className="bg-black/5">
                <PdfBlobViewer url={SITE_CONFIG.resumeUrl} />
              </div>

              <div className="p-6 flex justify-center">
                <Button size="lg" asChild>
                  <a href={SITE_CONFIG.resumeUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Resume
                  </a>
                </Button>
              </div>
            </Card>
          </FadeInUp>
        </div>
      </div>
    </main>
  );
}
