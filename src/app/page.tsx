export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">shadcn starter</h1>
      <p className="mt-4 text-muted-foreground">
        Next.js + shadcn/ui + Tailwind 4 + shadcnblocks registry
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Run <code className="rounded bg-muted px-2 py-1">npx shadcn@latest add shadcnblocks/hero-1</code> to add blocks
      </p>
    </main>
  );
}
