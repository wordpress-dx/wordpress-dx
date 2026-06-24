import { BrevoClient } from "@getbrevo/brevo";

export async function subscribeEmail(email: string) {
  const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY!,
  });

  const res = await brevo.contacts.createContact({ email });

  if (!res?.id) {
    throw new Error(`Brevo error: no id returned`);
  }
}
