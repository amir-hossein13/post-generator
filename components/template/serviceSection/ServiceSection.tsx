import { Lamp, BarChart, PenTool } from "lucide-react";

const services = [
  {
    icon: Lamp,
    title: "Enter Your Idea",
    desc: "Craft engaging and relevant social media posts tailored to your audience.",
  },
  {
    icon: BarChart,
    title: "Optimize Engagement",
    desc: "Get AI-generated posts that increase reach and boost interaction.",
  },
  {
    icon: PenTool,
    title: "Customizable Content",
    desc: "Easily tweak the AI suggestions to match your brand voice and style.",
  },
];

function ServiceSection() {
  return (
    <section className="mt-20 py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Generate High-Quality Social Media Posts
        </h2>
        <p className="text-muted max-w-2xl mx-auto mt-2">
          Boost your social media presence with AI-generated content for
          LinkedIn & Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="p-6 flex flex-col items-center text-center rounded-2xl   transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="p-4 rounded-full bg-primary/20 mb-4">
                <Icon className="text-primary w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-muted text-sm">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceSection;
