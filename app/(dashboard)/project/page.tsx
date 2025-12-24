import Link from "next/link";
import React from "react";

const Project = () => {
  const projects = [
    {
      slug: "banking",
      name: "Banking Application",
    },
    {
      slug: "e-commerce",
      name: "e-Commerce Application",
    },
    {
      slug: "erp",
      name: "ERP Application",
    },
  ];
  return (
    <div>
      <p className="h1-bold">Projects</p>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/project/${project.slug}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
