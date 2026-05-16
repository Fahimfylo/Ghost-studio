import type { ContactFormValues } from "@/schemas";

export async function submitContactForm(data: ContactFormValues): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 2000));
}
