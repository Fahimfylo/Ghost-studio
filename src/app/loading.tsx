export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-accent-blue/20 border-t-accent-blue animate-spin" />
        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground animate-pulse">
          Nexlify Studio
        </span>
      </div>
    </div>
  );
}
