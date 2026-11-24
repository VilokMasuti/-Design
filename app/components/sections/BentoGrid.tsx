import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href: string;
  src: string;
  alt: string;
  className?: string;
}

const BentoGrid = () => {
  return (
    <article className="w-full  shadow-input max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <Header />
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-1 my-10 mask-b-from-50% p-1 ">
        <Column className="">
          <Card
            href="https://www.anthropic.com/"
            src="/anthropic-hero.png"
            alt="Anthropic"
            className=""
          />
          <Card
            href="https://clerk.com/"
            src="/clerk-hero.png"
            alt="Clerk"
            className="h-50"
          />
          <Card
            href="https://www.figma.com/"
            src="/figma-hero.png"
            alt="Figma"
          />
        </Column>

        <Column className="    ">
          <Card
            href="https://linear.app/"
            src="/linear-hero.png"
            alt="Linear"
            className="h-30"
          />
          <Card
            href="https://www.notion.com/"
            src="/notion-hero.png"
            alt="Notion"
            className="h-30"
          />
          <Card
            href="https://railway.com/"
            src="/railway-hero.png"
            alt="Railway"
            className="h-30"
          />
          <Card
            href="https://stripe.com/"
            src="/stripe-hero.png"
            alt="Stripe"
            className="h-50"
          />
        </Column>

        <Column>
          <Card
            href="https://supabase.com/"
            src="/supabase-hero.png"
            alt="Supabase"
            className="h-30"
          />
          <Card
            href="https://www.raycast.com/"
            src="/raycast-hero.png"
            alt="Raycast"
            className="h-30"
          />
          <Card
            href="https://webflow.com/"
            src="/webflow-hero.png"
            alt="Webflow"
            className="h-60 "
          />
        </Column>

        <Column className="">
          <Card
            href="https://vercel.com/"
            src="/vercel-hero.png"
            alt="Vercel"
          />

          <Card
            href="https://www.framer.com/"
            src="/framer-hero.png"
            alt="Framer"
            className=" h-40"
          />
          <Card
            href="https://stripe.com/"
            src="/stripe-hero.png"
            alt="Stripe"
          />
          <Card
            href="https://www.notion.com/"
            src="/notion-hero.png"
            alt="Notion"
          />
        </Column>
      </section>
    </article>
  );
};

const Header = () => (
  <section>
    <h1 className="font-inter text-4xl tracking-tighter text-neutral-900 text-pretty">
      Bento grids are cool, you should try it sometimes.
    </h1>
    <p className="max-w-xl mt-4 font-satoshi text-base text-neutral-500 text-pretty">
      Discover innovative solutions that transform the way you work and create.
      Our cutting-edge tools are designed to empower your creativity and boost
      your productivity like never before.
    </p>
  </section>
);

const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className?: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("card overlay group rounded-md w-full h-40", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="object-cover"
      />
      <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 inset-0 text-white font-medium text-sm m-auto flex justify-center items-center">
        {href.split("https://")[1]}
      </p>
    </Link>
  );
};

const Column = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
};

export default BentoGrid;

/*
Hero image sources (1920x1080 desktop captures)
Anthropic: https://www.anthropic.com/ => public/anthropic-hero.png
Clerk: https://clerk.com/ => public/clerk-hero.png
Figma: https://www.figma.com/ => public/figma-hero.png
Framer: https://www.framer.com/ => public/framer-hero.png
Linear: https://linear.app/ => public/linear-hero.png
Notion: https://www.notion.com/ => public/notion-hero.png
Railway: https://railway.com/ => public/railway-hero.png
Raycast: https://www.raycast.com/ => public/raycast-hero.png
Resend: https://resend.com/ => public/resend-hero.png
Sentry: https://sentry.io/ => public/sentry-hero.png
Stripe: https://stripe.com/ => public/stripe-hero.png
Supabase: https://supabase.com/ => public/supabase-hero.png
Vercel: https://vercel.com/ => public/vercel-hero.png
Webflow: https://webflow.com/ => public/webflow-hero.png
*/
