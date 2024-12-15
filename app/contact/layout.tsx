import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Meta Museum Art",
  description: "Get in touch with our team at Meta Museum Art.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
