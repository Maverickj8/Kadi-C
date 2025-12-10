export default function AboutSection() {
  return (
    <section className="bg-[#111] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 h-auto">
      {/* Left: Stacked Images */}
      <div data-aos="fade-left" className="relative flex flex-col items-center md:w-1/2 space-y-4">
        <div className="absolute -top-10 -left-8 w-40 h-40 rounded-lg overflow-hidden border-4 border-green-600">
          <img src="/images/soya.png" alt="Farming" className="object-cover w-full h-full" />
        </div>
        <div className="relative w-56 h-56 rounded-lg overflow-hidden border-4 border-green-500 mt-16">
          <img src="/images/lady.png" alt="Farmer" className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-10 left-24 w-36 h-36 rounded-lg overflow-hidden border-4 border-green-400">
          <img src="/images/honey.png" alt="Harvest" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Right: Text Content */}
      <div data-aos="fade-right" className="md:w-1/2 sm:pb-5 space-y-6 text-gray-200">
        <h2 className="text-3xl text-gray-100/60 font-bold">About Us</h2>
        <h3 className="text-2xl font-bold leading-snug">
          Innovative organic{" "}
          <span className="text-green-400">agro-export</span> enterprise.
        </h3>
        <p className="leading-relaxed text-gray-300 text-[15px]">
          Kadi C Farms Limited is an agro-export company dedicated to restoring
          quality organic produce to the global market and improving consumer
          health. We specialize in producing and exporting premium organic
          products, including honey, red palm oil, soybeans, wheat, ginger, rice,
          and wood charcoal. Our commitment to excellence and sustainability has
          positioned us as an emerging leader in the organic agriculture sector.
        </p>

        <a
          href="/ourTeam"
          className="inline-block bg-green-700 hover:bg-green-600 px-8 py-3 rounded-full font-semibold text-white transition"
        >
          Read More
        </a>
      </div>
    </section>
  );
}
