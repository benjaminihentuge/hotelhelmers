import Link from "next/link";

const Hero = () => (
  <>
    {/* Hero Section */}
    <section
      className="relative text-center bg-cover bg-center h-[500px] flex items-center justify-center"
      style={{ backgroundImage: 'url("images/hero.jpeg")' }} // Updated background image
    >
      <div className="bg-black bg-opacity-10 text-white p-6 rounded max-w-md">
        <h1 className="text-4xl font-bold">Hotel Helmers</h1>
        <p className="text-lg mt-2">Comfort and luxury at its finest!</p>

        {/* Book Now Button with Link */}
        <Link href="/book">
          <button className="mt-4 bg-red-500 px-6 py-3 text-lg font-semibold rounded hover:bg-red-600 transition-colors">
            Book Now
          </button>
        </Link>
      </div>
    </section>

    {/* Section Below the Hero */}
    <section className="bg-gray-900 text-white py-10 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Text Section */}
        <div>
          <h2 className="text-green-400 text-lg font-semibold">Luxury Redefined</h2>
          <h3 className="text-3xl text-rose-white font-bold mt-2">Experience the Best in Abuja</h3>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Welcome! Here, we don't do the conventional; we do fun and loyalty...
            Known in the heart of Abuja for spaces, services, food, and drinks
            that bring the magic. If you're a fan of stylish hotels with a true
            tourist experience, you'll be right at home with us.
          </p>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Hotel Helmers is the perfect destination where sophistication, comfort,
            and quality service are intertwined. Enjoy exceptional service and a
            host of exceptional amenities.
          </p>

          {/* Get in Touch Button */}
          <button className="mt-6 mr-10 px-1 py-3 text-lg font-semibold underline hover:text-red-500 transition-colors">
            Get in touch
          </button>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/images/hero2.jpg"
            alt="Hotel interior"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  </>
);

export default Hero;
