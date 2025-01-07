"use server";

export async function handleSubmit(formData: FormData): Promise<void> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Process form data
  const data = {
    name: formData.get("name") as string | null,
    email: formData.get("email") as string | null,
    message: formData.get("message") as string | null,
  };

  if (!data.name || !data.email || !data.message) {
    console.error("Missing form data:", data);
    throw new Error("All fields are required.");
  }

  console.log("Form data:", data);

  // Example: Add logic to handle the form submission (e.g., save to database, send email, etc.)
}
