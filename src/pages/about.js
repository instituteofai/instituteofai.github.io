import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      The <strong>Institute of AI</strong> was created to provide high quality and affordable
      training to engineers in the field of Artificial Intelligence.
    </p>
    <p>You can get in touch with us at: contact@instituteofai.com</p>
  </Layout>
);

export default AboutPage;
