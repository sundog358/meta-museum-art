import React from "react";

export const metadata = {
  title: "Terms of Service - Meta Museum Art",
  description:
    "Rules and guidelines for responsibly using the Meta Museum Art platform.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rules and guidelines for responsibly using the Meta Museum Art
            platform.
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="font-bold mb-4">📜 Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Meta Museum Art platform, you confirm
              that you accept these Terms of Service and agree to comply with
              all applicable laws and regulations. If you do not agree to these
              terms, please refrain from using the platform.
            </p>
            <p className="mb-4">
              Meta Museum Art reserves the right to update these terms at any
              time. Continued use of the platform after updates signifies your
              acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold mb-4">🔑 User Responsibilities</h2>
            <p className="mb-4">Users agree to:</p>
            <ul className="mb-4 list-disc list-inside">
              <li className="mb-2">
                Provide accurate and truthful information when prompted.
              </li>
              <li className="mb-2">
                Use the platform solely for lawful and non-commercial purposes
                unless otherwise permitted.
              </li>
              <li>
                Avoid activities that disrupt, harm, or exploit the platform or
                its users.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-bold mb-4">📄 Use License</h2>
            <p className="mb-4">
              Permission is granted to access and use the Meta Museum Art
              platform for personal, non-commercial, and transitory viewing
              only. Under this license, you may not:
            </p>
            <ul className="mb-4 list-disc list-inside">
              <li className="mb-2">
                Alter or replicate the content for commercial purposes.
              </li>
              <li className="mb-2">
                Reverse engineer or manipulate any part of the platform.
              </li>
              <li>Remove any copyright, trademark, or proprietary notices.</li>
            </ul>
            <p className="mb-4">
              This license will terminate immediately if you violate any terms
              and may be revoked by Meta Museum Art at its discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold mb-4">⚖️ Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionalities on Meta Museum
              Art—including but not limited to text, graphics, images, logos,
              and software—are owned by Meta Museum Art or its licensors and are
              protected by intellectual property laws.
            </p>
            <p className="mb-4">
              Unauthorized use of Meta Museum Art’s intellectual property is
              strictly prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold mb-4">🔒 Limitation of Liability</h2>
            <p className="mb-4">
              Meta Museum Art is not liable for any direct, indirect,
              incidental, or consequential damages arising from your use of the
              platform. All services are provided &ldquo;as is,&rdquo; without
              warranties of any kind, express or implied.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold mb-4">🔄 Changes to the Platform</h2>
            <p className="mb-4">
              Meta Museum Art reserves the right to modify or discontinue any
              aspect of the platform at any time, with or without notice. We are
              not liable for any modifications, suspensions, or
              discontinuations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold mb-4">📬 Contact Information</h2>
            <p className="mb-4">
              If you have any questions, concerns, or feedback about these Terms
              of Service, feel free to reach out to us:
            </p>
            <ul className="mb-4 list-disc list-inside">
              <li className="mb-2">
                Email:{" "}
                <a
                  href="mailto:support@metamuseumart.com"
                  className="text-primary hover:underline"
                >
                  admin@Sun And Rain Works dot com
                </a>
              </li>
              <li>
                Address: Meta Museum Art, 123 Art Boulevard, Heritage Town, USA.
                Earth.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
