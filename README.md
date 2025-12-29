# AI Social Post Generator 🚀

Generate high-quality, platform-optimized social media posts using AI.  
This project helps creators, founders, and marketers turn simple ideas into **professional LinkedIn and Instagram posts** with optimized hashtags — in seconds.

---

## ✨ Features

- 🤖 AI-powered post generation
- 🧠 Platform-specific optimization (LinkedIn & Instagram)
- ✍️ Clean, ready-to-post captions
- #️⃣ SEO-optimized hashtags
- ♻️ Regenerate posts instantly
- 📋 One-click copy
- 🎨 Modern, clean UI
- ⚡ Built with Next.js App Router

---

## 🖥️ Supported Platforms

### LinkedIn
- Professional tone  
- Clear hooks  
- Short paragraphs  
- CTA at the end  
- SEO-friendly hashtags  

### Instagram
- Casual tone  
- Emojis allowed  
- Short lines  
- Discoverability-optimized hashtags  

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Google Gemini (`gemini-2.5-flash`)

### AI
- Platform-specific system prompts
- Structured output for clean UI rendering

---

## 📂 Project Structure

```bash
.
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts
│   └── agent/
│       └── page.tsx
├── lib/
│   └── ai/
│       └── gemini.ts
├── types/
│   └── platform.ts
├── components/
│   └── ui/
│       └── Container.tsx
└── README.md
