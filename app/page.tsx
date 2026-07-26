import Navbar from "./Components/Navbar";
import ScrollSection from "./Components/ScrollSection";

export default function Home() {
  return (
  <>
  <Navbar />

  <section className="mx-auto flex w-screen max-w-6xl flex-col items-center justify-center gap-8 px-6 py-10 lg:min-h-[70vh] lg:flex-row lg:gap-10 lg:px-10 lg:py-16">
    
      <img 
        src="images/ProfessionalHeadshot.png" 
        alt={"Tristan Jones headshot"}
        className="h-64 w-64 rounded-[2rem] border-4 border-yellow-300 object-cover object-top shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
      />

      <div className="content flex max-w-3xl flex-col gap-6 border-l-8 border-yellow-300 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-900">
          Full-Stack Developer
        </p>

        <h1 className="text-4xl font-bold leading-tight text-blue-950 lg:text-6xl">
          I build authenticated, database-backed web apps with Next.js, TypeScript, Prisma, and PostgreSQL.
        </h1>

        <p className="text-lg leading-relaxed text-gray-800 lg:text-xl">
          I am a Computer Science student at Boise State University focused on building production-style full-stack applications with responsive UI, secure auth, tested business logic, CI checks, and cloud deployment.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://budget-calender-ashy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-blue-950 px-6 py-3 text-center font-bold text-yellow-300 transition hover:bg-yellow-300 hover:text-blue-950"
          >
            View Budget Calendar
          </a>
          <a
            href="https://github.com/tjones-22/budget-calender"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-2 border-blue-950 px-6 py-3 text-center font-bold text-blue-950 transition hover:bg-blue-950 hover:text-yellow-300"
          >
            GitHub Repo
          </a>
          <a
            href="https://www.linkedin.com/in/tristan-jones-a9490a24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-2 border-yellow-500 px-6 py-3 text-center font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
  </section>

  <h2 className="mb-10 text-center text-[40px] font-bold underline italic"> Featured Project</h2>
  <ScrollSection />
  
  <section className="w-screen px-6 py-16">
    <h2 className="mb-10 text-center text-[40px] font-bold underline italic lg:text-[50px]">
      Technical Skills
    </h2>

    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="rounded-lg border-2 border-yellow-300 bg-blue-950 p-6 text-yellow-300">
        <h3 className="mb-4 text-2xl font-bold">Frontend</h3>
        <ul className="space-y-2 text-lg text-white">
          <li>React</li>
          <li>Next.js App Router</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Responsive UI</li>
        </ul>
      </div>

      <div className="rounded-lg border-2 border-yellow-300 bg-blue-950 p-6 text-yellow-300">
        <h3 className="mb-4 text-2xl font-bold">Backend</h3>
        <ul className="space-y-2 text-lg text-white">
          <li>Server Actions</li>
          <li>Auth.js / OAuth</li>
          <li>Prisma ORM</li>
          <li>PostgreSQL</li>
          <li>Data modeling</li>
          <li>Server-side validation</li>
        </ul>
      </div>

      <div className="rounded-lg border-2 border-yellow-300 bg-blue-950 p-6 text-yellow-300">
        <h3 className="mb-4 text-2xl font-bold">Tools & Workflow</h3>
        <ul className="space-y-2 text-lg text-white">
          <li>Git / GitHub</li>
          <li>Vercel deployment</li>
          <li>GitHub Actions CI</li>
          <li>Docker</li>
          <li>Vitest testing</li>
          <li>CI/CD workflow</li>
          <li>AI API integration</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="w-screen bg-blue-950 px-6 py-16 text-yellow-300">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-6 text-center text-3xl font-bold lg:text-4xl">
        Currently Building
      </h2>
      <p className="content mx-auto max-w-3xl text-center text-lg leading-relaxed text-white">
        I am planning a closet-building and outfit-matching app where users can upload images of clothing they own, organize their wardrobe, and use either manual selection or AI-assisted recommendations to build outfits.
      </p>
    </div>
  </section>
  </>
  
);}
