const testimonials = [
  {
    quote:
      "HOMEi has completely transformed how we handle inspections. What used to take a full day of site visits now happens remotely with better documentation than we ever had before.",
    name: "Sarah Mitchell",
    role: "Portfolio Manager",
    company: "Greenfield Estates",
    initials: "SM",
  },
  {
    quote:
      "The tenant communication features alone have saved us countless hours. No more chasing tenants for inspection access or playing phone tag about maintenance issues.",
    name: "James Thornton",
    role: "Private Landlord",
    company: "12 Properties",
    initials: "JT",
  },
  {
    quote:
      "As an estate agent managing properties for multiple landlords, HOMEi gives us a professional edge. The reports we generate impress our clients and keep us compliant effortlessly.",
    name: "Rebecca Chen",
    role: "Lettings Director",
    company: "Apex Property Group",
    initials: "RC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wide mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Trusted by Landlords & Agents
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            See what property professionals are saying about how HOMEi has
            improved their day-to-day operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
