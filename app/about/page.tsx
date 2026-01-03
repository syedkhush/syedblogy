import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-slate-100 shadow-sm">
            <Image
              src="/profile.png"
              alt="Syed Khush"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold text-[#0055AA]">
              Why Stoicism?
            </h1>
            <p className="text-lg text-slate-500 font-serif italic">
              Developer, Philosopher, Digital Gardener
            </p>
          </div>
        </div>
      </header>

      <div className="prose prose-xl prose-slate max-w-none font-serif">
        <p>
          Hello, I'm Syed Khush—a software developer by profession and a student of Stoic philosophy by passion.
          This digital garden is where those two worlds collide.
        </p>

        <p>
          My journey with Stoicism began when I realized that being a good developer required more than just
          technical skill—it required a stable mind. When code breaks, servers go down, or requirements shift,
          the Stoic doesn't panic. They analyze what is in their control and act with reason.
        </p>

        <h3>The Philosophy of the Garden</h3>
        <p>
          I call this a "Digital Garden" because, like philosophy, it is never finished.
          Unlike a traditional blog that is a series of static events, a garden is a living system.
          I plant seeds of ideas, cultivate them with research and practice, and occasionally
          uproot old thoughts that no longer serve the truth.
        </p>

        <h3>My Stoic Practice</h3>
        <p>
          I follow the three disciplines of Epictetus:
        </p>
        <ul>
          <li><strong>The Discipline of Desire:</strong> Wanting only what is in my control.</li>
          <li><strong>The Discipline of Action:</strong> Acting with virtue and for the common good.</li>
          <li><strong>The Discipline of Assent:</strong> Maintaining clarity of judgment in every moment.</li>
        </ul>

        <p>
          If you're here, you're likely looking for more than just productivity hacks. You're looking
          for a way to be. I hope my reflections help you find your own inner citadel.
        </p>
      </div>

      <footer className="pt-12 border-t border-slate-100">
        <blockquote className="italic text-slate-500 text-lg border-l-4 border-slate-200 pl-6">
          "The best revenge is not to be like your enemy."
          <span className="block mt-2 text-sm font-bold uppercase tracking-widest">— Marcus Aurelius</span>
        </blockquote>
      </footer>
    </div>
  )
}
