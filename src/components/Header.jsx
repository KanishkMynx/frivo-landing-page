import React from 'react';

export default function HeaderSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Compartment */}
      <div className="md:w-1/2 w-full bg-indigo-100 rounded-r-3xl p-10 flex flex-col justify-center space-y-6 mr-3">
        {/* Badge */}
        <div className="bg-[#123B61] text-[#E63946] font-semibold px-9 py-5 rounded-full w-fit text-sm flex items-center gap-2">
          <span className="text-sm">Welcome to Frivo Solutions →</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="relative inline-block">
            Frivo
            <span className="absolute left-0 -bottom-1 w-full h-2 bg-purple-300 opacity-70 -z-10"></span>
          </span>{' '}
          Global <br /> Employment Program
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-base md:text-lg">
          At Frivo Solutions, we are committed to delivering top-tier IT consulting, staffing, and project management
          solutions that drive digital transformation and business success. Our expertise spans multiple industries,
          helping businesses leverage technology, optimize operations, and stay ahead in an evolving market.
        </p>
      </div>

      {/* Right Compartment */}
      <div className="md:w-1/2 w-full h-160 bg-indigo-100 rounded-l-3xl flex items-center justify-center p-10">
        <div className="bg-white rounded-3xl shadow-md p-8 w-full max-w-lg h-fit border">
          <h3 className="text-xl font-bold text-center mb-2">Secure your spot now</h3>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Stay in the loop with our latest job openings and hiring news — no spam, just opportunities.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition"
            >
              Enroll
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-4">
            By subscribing, you agree with our{' '}
            <a href="#" className="underline">
              Terms of License
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

