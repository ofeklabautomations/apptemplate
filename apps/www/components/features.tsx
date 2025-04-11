import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Code,
  BarChart2,
  CreditCard,
} from "lucide-react";

const features = [
  {
    name: "Type-Safe Development",
    description:
      "Full TypeScript support across the entire codebase for robust, maintainable code.",
    icon: Code,
  },
  {
    name: "Real-time Analytics",
    description:
      "Comprehensive analytics powered by PostHog to track user behavior and optimize your product.",
    icon: BarChart2,
  },
  {
    name: "Secure Authentication",
    description:
      "Enterprise-grade authentication with Supabase, protected against the latest security vulnerabilities.",
    icon: Shield,
  },
  {
    name: "Seamless Payments",
    description:
      "Integrated Stripe payments and Update billing for hassle-free subscription management.",
    icon: CreditCard,
  },
  {
    name: "Cloud-Native Architecture",
    description:
      "Built on Next.js 15 with App Router & Server Components for optimal performance.",
    icon: Cloud,
  },
  {
    name: "Scalable Database",
    description:
      "Powerful Supabase database with real-time capabilities and automatic backups.",
    icon: Database,
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Cutting-Edge Solutions
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how Acme can transform your business with our innovative
          technologies.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map(feature => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
