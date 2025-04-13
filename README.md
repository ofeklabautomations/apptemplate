# Lab Automations SaaS Starter Kit

A production-ready, feature-rich SaaS starter kit built with modern web technologies. Launch your lab automation SaaS product in days, not months.

## ✨ Features

- 🏗️ **Rock-solid Foundation**
  - [Next.js 15](https://nextjs.org/) with App Router & Server Components
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Turborepo](https://turborepo.org/) monorepo setup with multi-zone architecture
  - Secure by default (protected against CVE-2025-29927)

- 💅 **Beautiful UI & UX**
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/) for accessible components
  - Dark mode support out of the box
  - [Lucide](https://lucide.dev/) icons
  - [Sonner](https://sonner.emilkowal.ski/) for beautiful toast notifications

- 🔥 **Battle-tested Stack**
  - [Supabase](https://supabase.com/) for authentication & database
  - [Update](https://update.dev) for easy billing and auth
  - [SWR](https://swr.vercel.app/) for data fetching
  - [PostHog](https://posthog.com/) for analytics
  - [Resend](https://resend.com) for transactional emails

- 🗺️ **Multi-zone architecture**
  - The landing page and dashboard are separate Next.js apps, but they share the same URL
  - Access the landing page at `/` and the dashboard at `/dashboard`
  - Easily separate logic and code for marketing and application

## 🚀 Quick Start

1. Clone the repository

```bash
git clone https://github.com/your-org/lab-automations-saas-template.git
cd lab-automations-saas-template
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables

```bash
cp .env.example .env
```

4. Start the development server

```bash
pnpm dev
```

## 🌟 Why This Starter Kit?

- **Production-Ready**: Built with scalability in mind
- **Modern Stack**: Uses the latest stable versions of all dependencies
- **Type-Safe**: Full TypeScript support across the entire codebase
- **Best Practices**: Follows industry standards and security best practices
- **Fully Featured**: Includes everything you need to launch a lab automation SaaS product

## 📦 What's Included

- Landing page template
- Dashboard application
- Authentication system
- Subscription management
- Admin panel
- Error tracking
- Analytics integration
- Email notifications via Resend

## 📦 Project Structure

```
├── apps/                  # Applications
│   ├── dashboard/         # Dashboard application
│   │   ├── app/           # Next.js app directory
│   │   ├── components/    # Dashboard-specific components
│   │   └── public/        # Static assets
│   └── www/               # Landing page application
│       ├── app/           # Next.js app directory
│       ├── components/    # Landing page components
│       └── public/        # Static assets
├── packages/              # Shared packages
│   ├── ui/                # Shared UI components
│   │   ├── components/    # Reusable components
│   │   └── styles/        # Shared styles
│   ├── utils/             # Shared utilities
│   └── eslint/            # ESLint configuration
├── turbo.json             # Turborepo configuration
└── package.json           # Root package.json
```

## 🎨 Tailwind Configuration

The template includes a comprehensive Tailwind configuration with:

- **Custom Colors**: Extended color palette for branding
- **Dark Mode**: Automatic dark mode support with system preference
- **Animations**: Custom keyframes and transitions
- **Typography**: Custom font families and text styles
- **Spacing**: Extended spacing scale
- **Components**: Pre-configured component classes

## 🚀 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/lab-automations-saas-template)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💪 Support

For issues, feature requests, or questions, please [open an issue](https://github.com/your-org/lab-automations-saas-template/issues).

---

Built with ❤️ by Lab Automations
With all credit to Emmett M: https://github.com/EmmettM/super-saas-template
