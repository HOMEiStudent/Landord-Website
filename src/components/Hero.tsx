export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-sky-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-50/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-sky-500 rounded-full" />
              <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                For Landlords & Estate Agents
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight tracking-tight">
              Smarter Property Management{" "}
              <span className="text-sky-500">Starts Here</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              HOMEi helps landlords and estate agents reduce inspection costs,
              streamline tenant communication, and manage properties effortlessly
              — all from one powerful platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-navy-800 hover:bg-navy-700 rounded-lg transition-colors shadow-lg shadow-navy-800/20"
              >
                Get Started Today
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-navy-800 bg-white border-2 border-navy-200 hover:border-navy-300 hover:bg-navy-50 rounded-lg transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-2xl font-bold text-navy-900">60%</p>
                  <p className="text-sm text-slate-500">
                    Lower inspection costs
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy-900">3x</p>
                  <p className="text-sm text-slate-500">
                    Faster issue resolution
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy-900">100%</p>
                  <p className="text-sm text-slate-500">Digital compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-slate-200 p-6">
              {/* Mock Dashboard Preview */}
              <div className="bg-navy-900 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                  <div>
                    <div className="h-2.5 w-24 bg-white/20 rounded" />
                    <div className="h-2 w-16 bg-white/10 rounded mt-1" />
                  </div>
                </div>
              </div>

              {/* Mock property cards */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-32 bg-slate-200 rounded" />
                    <div className="h-2 w-20 bg-slate-100 rounded mt-1.5" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Inspected
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-28 bg-slate-200 rounded" />
                    <div className="h-2 w-24 bg-slate-100 rounded mt-1.5" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-amber-700 bg-amber-100 rounded-full">
                    Pending
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-36 bg-slate-200 rounded" />
                    <div className="h-2 w-18 bg-slate-100 rounded mt-1.5" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-sky-700 bg-sky-100 rounded-full">
                    Scheduled
                  </span>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl border border-slate-200 p-4 w-56">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  Inspection Complete
                </span>
              </div>
              <p className="text-xs text-slate-500">
                12 Maple Street — Tenant self-inspection submitted with 24
                photos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
