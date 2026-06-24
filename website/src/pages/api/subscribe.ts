import type { APIRoute } from "astro";
import { z } from "zod";
import { subscribeEmail } from "@/lib/subscribe";

const schema = z.object({ email: z.string().email() });

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 422 });
  }

  try {
    await subscribeEmail(parsed.data.email);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), { status: 500 });
  }
};
