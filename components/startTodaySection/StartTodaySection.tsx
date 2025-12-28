import Link from "next/link";

function StartTodaySection() {
  return (
    <section className="bg-primary/80 py-20 mt-10">
      <div className="text-center text-white flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Generate High-Quality Social Media Posts
        </h2>
        <p className="text-white/80  max-w-2xl mx-auto mt-2">
          Boost your social media presence with AI-generated content for
          LinkedIn & Instagram.
        </p>
        <Link
          href="/agent"
          className="bg-white  hover:bg-primary-hover text-black rounded-xl px-8 py-3 text-base shadow-lg transition-colors shadow-primary/30"
        >
          Generate Your First Post
        </Link>
      </div>
    </section>
  );
}

export default StartTodaySection;
