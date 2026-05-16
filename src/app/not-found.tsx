import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-background">
      <h1 className="text-9xl font-black text-accent-blue/10 mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-4">This page doesn't exist — but your product could.</h2>
      <p className="text-muted-foreground max-w-md mb-12">
        The link might be broken, or the page has been moved. Let's get you back on track to scaling your software.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="primary" size="lg" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Start a Project</Link>
        </Button>
      </div>
    </div>
  );
}
