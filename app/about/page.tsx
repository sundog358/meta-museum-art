import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About - Meta Museum Art: A Sun & Rain Works Project",
  description:
    "Learn about Sun & Rain Works, an art business that leverages technology to promote and encourage access to information and knowledge for public good, art, and education.",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 md:py-18">
        {/* Page Header */}
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-6">
            About Sun & Rain Works
          </h1>
          <p className="text-lg md:text-2xl text-ffffff leading-relaxed max-w-4xl mx-auto">
            Sun & Rain Works, Est. 2005, is an art business that designs
            websites, and software solutions, and creates linked open data
            tools, and promotes and encourages access to information and
            knowledge for the public good, art and experience, and education.
          </p>
        </header>

        {/* Image Section */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative bg-gradient-to-r from-green-200 via-green-100 to-green-300 rounded-xl shadow-2xl border-4 border-blue-800">
            <Image
              src="/images/metawikiart3.png"
              alt="Meta Museum Art Illustration"
              width={600}
              height={450}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
              Our Mission
            </h2>
            <p className="text-ffffff leading-relaxed text-lg">
              Our mission is to improve the technology and access for how
              cultural heritage is shared and appreciated by human beings, not
              just machines. By creating innovative web designs, software
              solutions, and linked open data tools, we help institutions and
              creators unlock the true potential of their collections. We are
              committed to making cultural history discoverable, interconnected,
              and meaningful for everyone, everywhere, to promote and encourage
              education and knowledge.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
              Our Vision
            </h2>
            <p className="text-ffffff leading-relaxed text-lg">
              We envision a world where cultural heritage transcends boundaries
              through technology. By creating a seamless connection between
              institutions, artists, and audiences, we enable new discoveries,
              foster collaboration, and inspire a greater appreciation of our
              shared cultural narrative. Our vision is a future where technology
              elevates human beings with information, knowledge, experience, and
              art, promoting and encouraging healthy people and planet Earth.
              Sun & Rain Works.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl font-bold text-center text-ffffff mb-12">
            Our Team
          </h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center max-w-md border-t-4 border-blue-800">
              {/* Sun & Rain Works Logo */}
              <div className="mb-6">
                <Image
                  src="/images/sunandrainlogo.png"
                  alt="Sun & Rain Works Logo"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full shadow-md border-2 border-blue-800"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                Sun & Rain Works
              </h3>
              <p className="text-lg text-blue-700 font-medium mb-4">
                Established 2005
              </p>
              <p className="text-blue-800 text-lg leading-relaxed">
                Sun & Rain Works is an art business that leverages technology to
                promote and encourage access to information and knowledge, for
                the public good, and Art and Education.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
