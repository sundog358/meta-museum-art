import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED_PROJECTS } from "@/utils/constants";

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-gray-900">
          Featured Projects
        </h2>
        <p className="text-blue-900 mb-8 max-w-2xl">
          Discover how cultural institutions are transforming their collections
          through linked open data.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
