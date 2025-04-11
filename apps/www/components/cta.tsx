import { Button } from "@repo/ui";

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Launch your SaaS in days, not months
        </h2>
        <p className="max-w-4xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Start building with a production-ready stack featuring Next.js 15,
          TypeScript, Supabase, and Stripe integration. Everything you need to
          scale your business.
        </p>
        <Button size="lg" className="mt-4" asChild>
          <a href="https://github.com/EmmettM/super-saas-template">
            Clone the template
          </a>
        </Button>
      </div>
    </section>
  );
}
