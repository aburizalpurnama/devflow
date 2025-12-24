import React from "react";

const ProjectDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <div>Project Detail of #{slug}</div>;
};

export default ProjectDetail;
