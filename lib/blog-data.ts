export type BlogPost = {
    title: string
    excerpt: string
    date: string
    readTime: string
    tags: string[]
    slug: string
    content?: string
}

export const blogPosts: BlogPost[] = [
    {
        title: "On the Discipline of Desire",
        excerpt:
            "How Marcus Aurelius taught us to want what we have, rather than have what we want. An exploration of contentment and the Stoic approach to managing our desires in a world of endless distractions.",
        date: "December 15, 2024",
        readTime: "5 min read",
        tags: ["Philosophy", "Desire", "Marcus Aurelius"],
        slug: "discipline-of-desire",
        content: `
      <p>The Discipline of Desire is one of the three central disciplines of Epictetus, crucial for the Stoic practitioner. It deals with our passions and desires, teaching us to orient them correctly.</p>
      
      <h3>The Core Principle</h3>
      <p>We should limit our desires only to what is in our complete control (our own actions and moral character) and accept with equanimity what is not in our control (external events, wealth, reputation).</p>
      
      <h3>Modern Application</h3>
      <p>In a consumerist society that constantly manufactures new needs, the Discipline of Desire is a radical act of freedom. By refusing to tie our happiness to the acquisition of the next gadget or accolade, we become invincible to fortune.</p>
      
      <blockquote>"Do not seek for things to happen the way you want them to; rather, wish that what happens happen the way it happens: then you will be happy." — Epictetus</blockquote>
    `
    },
    {
        title: "Morning Reflections: A Daily Practice",
        excerpt:
            "Starting each day with Stoic meditation and the practice of negative visualization. How ancient wisdom can transform your morning routine and set the tone for a more mindful day.",
        date: "December 10, 2024",
        readTime: "3 min read",
        tags: ["Practice", "Morning", "Meditation"],
        slug: "morning-reflections",
        content: `
      <p>How you start your morning often determines the quality of your entire day. The Stoics understood this well and developed specific practices to prepare the mind for daily life.</p>
      
      <h3>Premeditatio Malorum</h3>
      <p>Before leaving bed, briefly accept that you may encounter difficult people, setbacks, or frustrations today. By anticipating them, you rob them of their power to surprise and disturb you.</p>
      
      <h3>Setting Intention</h3>
      <p>Ask yourself: "What virtue do I want to embody today?" Perhaps it is patience, or courage, or moderation. Keep this intention at the forefront of your mind.</p>
    `
    },
    {
        title: "The View from Above",
        excerpt:
            "Marcus Aurelius' cosmic perspective and how it transforms our daily struggles. Learning to see our problems from the perspective of eternity and finding peace in the vastness of existence.",
        date: "December 5, 2024",
        readTime: "7 min read",
        tags: ["Perspective", "Cosmos", "Wisdom"],
        slug: "view-from-above",
        content: `
      <p>When we are stuck in traffic or frustrated by a petty argument, our world shrinks to the size of our annoyance. The "View from Above" is the antidote.</p>
      
      <h3>Expanding Awareness</h3>
      <p>Imagine pulling back from your current situation. See your house, then your city, then your country, and finally the whole Earth as a pale blue dot in the cosmos. From this vantage point, how significant is your current trouble?</p>
      
      <p>This is not nihilism. It is a way to detach from trivialities so we can focus on what truly matters: living with virtue and reason in the short time we have.</p>
    `
    },
    {
        title: "Amor Fati in Practice",
        excerpt:
            "Learning to love your fate, even when it's difficult. How the Stoic concept of amor fati can help us embrace life's challenges and find meaning in every experience.",
        date: "November 28, 2024",
        readTime: "6 min read",
        tags: ["Amor Fati", "Acceptance", "Growth"],
        slug: "amor-fati-practice",
        content: `
      <p>Amor Fati means "love of fate". It is not just resignation, but an enthusiastic acceptance of everything that happens in life, including suffering and loss.</p>
      
      <p>Friedrich Nietzsche, who was deeply influenced by the Stoics, described it as his formula for human greatness. To wish for nothing to be different, not forward, not backward, not in all eternity.</p>
    `
    },
    {
        title: "The Inner Citadel",
        excerpt:
            "Building an unassailable fortress of the mind through Stoic principles. How to develop inner strength that no external circumstance can shake.",
        date: "November 20, 2024",
        readTime: "8 min read",
        tags: ["Inner Strength", "Resilience", "Philosophy"],
        slug: "inner-citadel",
        content: `
      <p>Marcus Aurelius speaks of an "Inner Citadel"—a core of our being that no external force can touch. This is our ruling faculty, our reason.</p>
      
      <p>We build this citadel not by stone, but by correct judgments. If we judge that nothing external is truly good or bad, but only our own character is, then we are safe. No one can force us to do evil or preventing us from acting virtuously.</p>
    `
    },
    {
        title: "On Impermanence and Joy",
        excerpt:
            "Finding happiness in the temporary nature of all things. How understanding impermanence can actually increase our capacity for joy and appreciation.",
        date: "November 15, 2024",
        readTime: "4 min read",
        tags: ["Impermanence", "Joy", "Mindfulness"],
        slug: "impermanence-and-joy",
        content: `
      <p>Everything is in flux. The seasons change, empires fall, and our lives pass. The Stoic does not despair at this, but accepts it as the nature of the universe.</p>
      
      <p>Paradoxically, embracing impermanence makes each moment more precious. We love our friends and family more deeply when we remember that our time with them is finite. We savor the sunset because we know it will not last.</p>
    `
    },
]
