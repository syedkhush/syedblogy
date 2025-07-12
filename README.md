# Stoic Digital Garden

A beautiful, responsive website exploring Stoic philosophy with a focus on Marcus Aurelius' Meditations and practical wisdom for modern life.

## Features

- 🌿 **Digital Garden Concept** - Organic, interconnected content structure
- 📚 **Stoic Philosophy Focus** - Deep dives into concepts like Premeditatio Malorum, Amor Fati, and Memento Mori
- 🌙 **Dark/Light Mode** - Elegant theme switching
- 📱 **Fully Responsive** - Beautiful on all devices
- ⚡ **Fast & Optimized** - Built with Next.js and optimized for GitHub Pages
- 🎨 **Clean Design** - Minimalist aesthetic reflecting Stoic principles

## Core Sections

- **Homepage** - Welcome to the digital garden with featured concepts
- **Blog** - Philosophical writings and reflections
- **Concepts** - Detailed explorations of Stoic principles
- **Meditations** - Insights from Marcus Aurelius' personal writings
- **About** - Personal journey and philosophy

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: GitHub Pages with GitHub Actions

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/stoic-digital-garden.git
   cd stoic-digital-garden
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - GitHub Actions will automatically build and deploy
2. **Enable GitHub Pages** in your repository settings
3. **Set source** to "GitHub Actions"
4. **Custom domain** - Add your domain in repository settings if using a custom domain

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx              # Root layout with theme provider
│   ├── globals.css             # Global styles and theme variables
│   ├── blog/                   # Blog section
│   ├── concepts/               # Stoic concept pages
│   │   ├── premeditatio-malorum/
│   │   ├── amor-fati/
│   │   └── memento-mori/
│   ├── meditations/            # Marcus Aurelius insights
│   └── about/                  # About page
├── components/
│   ├── navigation.tsx          # Main navigation
│   ├── theme-toggle.tsx        # Dark/light mode toggle
│   └── ui/                     # shadcn/ui components
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
└── next.config.mjs             # Next.js configuration for static export
\`\`\`

## Customization

### Adding New Content

1. **New Blog Posts** - Add files in `app/blog/[slug]/page.tsx`
2. **New Concepts** - Create folders in `app/concepts/[concept]/page.tsx`
3. **Update Navigation** - Modify `components/navigation.tsx`

### Styling

- **Colors** - Modify theme in `app/globals.css`
- **Typography** - Update font settings in `app/layout.tsx`
- **Components** - Customize shadcn/ui components in `components/ui/`

### Configuration

- **Site Metadata** - Update `app/layout.tsx`
- **Build Settings** - Modify `next.config.mjs`
- **Deployment** - Adjust `.github/workflows/deploy.yml`

## Philosophy Behind the Design

This digital garden embodies Stoic principles:

- **Simplicity** - Clean, uncluttered design
- **Timelessness** - Classic typography and enduring aesthetics
- **Accessibility** - Inclusive design for all users
- **Mindfulness** - Thoughtful interactions and transitions
- **Growth** - Organic content structure that evolves over time

## Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📝 Content improvements
- 🎨 Design enhancements

Please feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Marcus Aurelius** - For the timeless wisdom in Meditations
- **The Stoic Philosophers** - Epictetus, Seneca, and others
- **Modern Stoic Community** - For keeping ancient wisdom alive
- **Next.js Team** - For the excellent framework
- **Vercel** - For the deployment platform

---

*"You have power over your mind—not outside events. Realize this, and you will find strength."* - Marcus Aurelius
