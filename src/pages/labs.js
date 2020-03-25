import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import projectsJson from './labs-projects.json';
import ProjectUnit from '../components/Projects/project-unit';

const LabsPage = () => (
  <Layout>
    <SEO title="IAI Labs" />
    <h2>Projects:</h2>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      {projectsJson.projects.map((project, idx) => {
        return <ProjectUnit key={idx} idx={idx} project={project} />
      })}
    </div>
  </Layout>
);

export default LabsPage;