"use client";

const features = [
  "Google OAuth sign-in with protected user flows",
  "One-time and recurring bill management",
  "Calendar-based balance simulation",
  "Notifications for scheduled bills",
  "Mobile-responsive dashboard",
];

const engineeringHighlights = [
  "Designed Prisma/PostgreSQL models for users, bank data, bills, recurring bills, and notifications.",
  "Built server actions for bill creation, deletion, recurrence, projections, and account updates.",
  "Implemented AI-assisted bill type matching to suggest categories from user-entered bill descriptions.",
  "Added Vitest coverage for date logic, bill helpers, database helpers, and server actions.",
  "Configured GitHub Actions CI and Vercel deployment with environment-based production settings.",
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Auth.js",
  "Prisma",
  "PostgreSQL",
  "AI type matching",
  "Vitest",
  "Vercel",
];

const ScrollSection = () => {
  return (
    <section className="w-screen px-6 pb-20">
      <article className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border-4 border-blue-950 bg-blue-950 shadow-2xl lg:grid-cols-2">
        <div className="bg-black p-4">
          <img
            src="images/BudgetCalendar_SC.svg"
            alt="Budget Calendar project screenshot"
            className="h-full min-h-72 w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 bg-blue-950 p-6 text-white lg:p-10">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
              Featured Full-Stack Project
            </p>
            <h3 className="text-4xl font-bold text-yellow-300">Budget Calendar</h3>
          </div>

          <p className="content text-lg leading-relaxed">
            Budget Calendar is a production-style budgeting app where users can sign in, manage bills, track notifications, and simulate future balances from a calendar interface.
          </p>

          <div>
            <h4 className="mb-3 text-xl font-bold text-yellow-300">Key Features</h4>
            <ul className="list-disc space-y-2 pl-5">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xl font-bold text-yellow-300">
              Engineering Highlights
            </h4>
            <ul className="list-disc space-y-2 pl-5">
              {engineeringHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-yellow-300 px-3 py-1 text-sm font-semibold text-yellow-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="https://budget-calender-ashy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-yellow-300 px-5 py-3 text-center font-bold text-blue-950 transition hover:bg-white"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/tjones-22/budget-calender"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-yellow-300 px-5 py-3 text-center font-bold text-yellow-300 transition hover:bg-yellow-300 hover:text-blue-950"
            >
              View Code
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ScrollSection;
