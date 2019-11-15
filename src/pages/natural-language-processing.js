import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import nlpJson from './natural-language-processing.json';
import CourseUnit from '../components/course-unit';

const BlogPage = () => (
    <Layout>
        <SEO title="Natural Language Processing" />
        <h1>Natural Language Processing</h1>
        <div>Learn how to process and analyze text, and use deep learning to make computers understand language as humans use it.</div>
        <div className="cu-cont">
            {nlpJson.units.map((unit, idx) => {
                return <CourseUnit key={idx} idx={idx} unit={unit} />
            })}
        </div>
    </Layout>
);

export default BlogPage;
