import { generatePosts } from "@/lib/ai/gimini";
import { Platform } from "@/types/platform";
import { NextResponse } from "next/server";
type RequestBody = {
  idea: string;
  platform: Platform;
};
export async function POST(req: Request) {
  const body = (await req.json()) as RequestBody;

  if (!body.idea || !body.platform) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const text = await generatePosts({
    prompt: body.idea,
    platform: body.platform,
  });

  return NextResponse.json({ text });
}
