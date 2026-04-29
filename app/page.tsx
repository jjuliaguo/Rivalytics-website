import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-center py-24 px-6 sm:px-12">

        {/* Logo + Name */}
        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/Just letter logo.png"
            alt="Rivalytics Logo"
            width={80}
            height={80}
          />
          <h1 className="text-2xl font-semibold text-[#245eab]">
            Know Your Competitors
          </h1>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

          {/* Left side (text) */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium text-[#245eab] mb-4">
              COMPETITIVE INTELLIGENCE, AUTOMATED
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Know your competition.
              <br />
              Stay ahead.
            </h2>

            <p className="text-zinc-600 text-lg mb-8 max-w-xl">
              Rivalytics tracks your competitors, analyzes their strategy,
              and uncovers opportunities — all in one powerful platform.
            </p>

            {/* Email input + button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-zinc-300 w-full sm:w-auto flex-1"
              />
              <button className="px-6 py-3 rounded-md bg-[#245eab] text-white font-medium hover:opacity-90">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}