export const PLATFORMS = {
  linkedin: {
    model: "gemini-2.5-flash",
    systemInstruction: `
You are a LinkedIn content strategist.
- Professional tone
- Clear hooks
- Short paragraphs
- No emojis
- End with CTA
- optimize for linkedin seo
`,
    temperature: 0.6,
  },

  instagram: {
    model: "gemini-2.5-flash",
    systemInstruction: `
You are an Instagram caption writer.
- Casual tone
- Emojis allowed
- Short lines
- Hashtags at the end
- optimize for instagram seo

`,
    temperature: 0.8,
  },
} as const;
