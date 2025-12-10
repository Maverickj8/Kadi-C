export default function Hero() {
  return (
    <section data-aos="fade-up"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}

      <div data-aos="fade-up" className="relative z-10 px-6 lg:px-20 max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
          Organic Farming & <br />
          <span className="text-gray-50 underline decoration-red-700 decoration-4 underline-offset-4">
            Global Export 
          </span>
          <span> Solution.</span>
         
        </h1>

        <p className="text-lg md:text-lg text-gray-200">
          Source sustainable agro products from a trusted partner committed to
          quality and reliability.
        </p>

        <a
          href="/products"
          className="inline-block bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full border-2 border-white transition"
        >
          All Products
        </a>
      </div>
    </section>
  );
}
