import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            UNLOCK YOUR
            <div className="flex items-center space-x-4">
              <span className="text-purple-600">INFLUENCER</span>
              <Sparkles className="text-green-500" size={32} />
            </div>
            POTENTIAL
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Build your brand, expand your audience, and turn your influence into
            lasting income
          </p>
          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg">
            LET'S CONNECT
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Content Creator"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
