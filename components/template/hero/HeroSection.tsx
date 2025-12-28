import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/10 via-transparent to-transparent" />
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Generate Engaging <span className="text-primary">LinkedIn</span> &
              <span className="text-accent">Instagram</span> Posts
              <br />
              in Seconds with AI
            </h1>

            <p className="text-muted max-w-md mx-auto md:mx-0 mb-10">
              Create high-quality social media posts instantly. Just write your
              idea — our AI handles the rest.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Link
                href="/agent"
                className="bg-primary transition-colors hover:bg-primary-hover text-white rounded-xl px-8 py-3 text-base shadow-lg shadow-primary/30"
              >
                Generate Your First Post
              </Link>

              <span className="text-sm text-muted">No sign-up required</span>
            </div>
          </div>

          <div className="relative w-full sm:h-168 h-65 ">
            <Image
              src="/img/hero2.png"
              alt="AI post generator preview"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
