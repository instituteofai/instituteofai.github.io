import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';

const courseContent = {
  modules: [
    {
      id: '01',
      name: 'Introduction to Python',
      description: 'Learn basics of the Python programming language.',
    },
    {
      id: '02',
      name: 'Working with Data in Python',
      description:
        'Learn how to load, manipulate and save data using libraries in Python.',
    },
    {
      id: '03',
      name: 'Introduction to Machine Learning',
      description:
        'Get a basic understanding of machine learning and build models.',
    },
    {
      id: '04',
      name: 'Introduction to Probability & Statistics',
      description: 'Learn how to describe data and prove hypotheses.',
    },
    {
      id: '05',
      name: 'Advanced Machine Learning',
      description:
        'Learn advanced methods to build more powerful models, and learn the basics of neural networks',
    },
    {
      id: '06',
      name: 'Introduction to Deep Learning',
      description:
        'Learn about different neural network architectures like Convolutional Neural Networks and Recurrent Neural Networks.',
    },
    {
      id: '07',
      name: 'Deep Learning for Vision',
      description:
        'Dive deep into using deep networks to solve problems in computer vision.',
    },
    {
      id: '08',
      name: 'Introduction to Natural Language Processing',
      description:
        'Learn how to process and analyze textual data using computers.',
    },
    {
      id: '09',
      name: 'Deep Learning for Text',
      description: 'Learn how to use deep networks with textual data.',
    },
    {
      id: '10',
      name: 'Project',
      description:
        'Choose a problem that interests you, gather data, build a model and deploy it!',
    },
  ],
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

    <h1>Course modules</h1>

    <div>
      {courseContent.modules.map(e => {
        return (
          <div
            style={{
              padding: `16px`,
              marginBottom: `16px`,
              border: `1px solid black`,
              borderRadius: `5px`,
            }}
            key={e.id}
          >
            <h2>{e.name}</h2>
            <div>{e.description}</div>
          </div>
        );
      })}
    </div>
  </Layout>
);

export default IndexPage;
