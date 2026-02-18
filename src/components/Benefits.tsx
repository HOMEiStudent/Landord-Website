const benefits = [
  {
    stat: "Up to 60%",
    label: "Lower Inspection Costs",
    description:
      "Tenant self-inspections dramatically reduce the need for costly on-site visits, saving you time and money on every property.",
  },
  {
    stat: "3x Faster",
    label: "Issue Resolution",
    description:
      "Instant maintenance reporting with photos means issues are identified and addressed before they escalate into expensive repairs.",
  },
  {
    stat: "Zero",
    label: "Paperwork Hassle",
    description:
      "Digital records, automated reports, and cloud storage eliminate filing cabinets and lost documents for good.",
  },
  {
    stat: "24/7",
    label: "Portfolio Visibility",
    description:
      "Access your complete property portfolio, tenant communications, and inspection history anytime, on any device.",
  },
];

const additionalBenefits = [
  "Reduce void periods with better tenant relationships",
  "Professional compliance documentation at the click of a button",
  "Scale your portfolio without scaling your overhead",
  "Protect yourself with timestamped photographic evidence",
  "Impress landlord clients with modern, transparent management",
  "Reduce disputes with clear, shared records",
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-wide mb-3">
            Why HOMEi
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built for the Way You Work
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Whether you manage 5 properties or 500, HOMEi adapts to your needs
            and delivers measurable results from day one.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <p className="text-3xl font-bold text-sky-400 mb-1">
                {benefit.stat}
              </p>
              <p className="text-sm font-semibold text-white mb-2">
                {benefit.label}
              </p>
              <p className="text-sm text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            More Reasons to Choose HOMEi
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-sky-400 mt-0.5 shrink-0"
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
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
