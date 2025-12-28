"use client";
import Container from "@/components/ui/Container";
import { useState } from "react";

function AgentPage() {
  const [idea, setIdea] = useState("");
  const [platform, setPlatform] = useState("linkedin");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cleanResult = (text: string) => {
    return text
      .replace(/^Here's a draft.*?\n\n/, "")
      .replace(/---/g, "")
      .trim();
  };
  const resetResult = () => {
    setResult("");
    setError("");
  };

  async function handelGenerate() {
    if (!idea || loading) return;
    setLoading(true);
    resetResult();

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea, platform }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate post");
      }
      const data = await res.json();
      setResult(cleanResult(data.text));
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <section className="mt-14">
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Generate high-quality posts with AI
          </h1>
          <p className="mt-3 text-base text-slate-500">
            Share your idea and let the AI agent craft a professional caption
            and optimized hashtags for better reach.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium text-slate-900">
              Your idea
            </h2>

            <textarea
              value={idea}
              disabled={loading}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your idea, topic, or message..."
              className="h-40 w-full resize-none rounded-xl border border-slate-200 p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-hobg-primary-hover disabled:cursor-not-allowed disabled:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />

            <div>
              <h3 className="text-lg font-medium">chose your platform</h3>
              <div>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-900 focus:border-primary-hover disabled:cursor-not-allowed disabled:bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-100"
                >
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <button
                onClick={handelGenerate}
                disabled={loading}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-md font-medium text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-primary/50"
              >
                {loading ? "Generating..." : "Generate with AI"}
              </button>
              {result && !loading && (
                <button
                  onClick={handelGenerate}
                  className="mt-3 text-md px-5 py-2.5 rounded-xl text-primary border border-primary hover:bg-primary hover:text-white  transition-colors "
                >
                  Regenerate
                </button>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium text-slate-900">
              Generated result
            </h2>

            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700 text-justify min-h-50">
              {loading && "AI agent is working..."}
              {!loading && !result && !error && (
                <span className="text-slate-400">
                  Your generated post will appear here.
                </span>
              )}
              {!loading && result && (
                <p className="whitespace-pre-wrap leading-relaxed">{result}</p>
              )}
              {error && <span className="text-red-500">{error}</span>}
            </div>

            {result && (
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="mt-4 rounded-xl bg-primary px-4 py-2 text-sm text-white transition hover:bg-primary-hover"
              >
                Copy result
              </button>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AgentPage;
