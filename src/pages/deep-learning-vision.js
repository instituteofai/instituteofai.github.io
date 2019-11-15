import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import dlvJson from './deep-learning-vision.json';
import CourseUnit from '../components/course-unit';

const BlogPage = () => (
    <Layout>
        <SEO title="Machine Learning" />
        <h1>Deep Learning for Vision</h1>
        <div>Get an introduction to deep learning, and apply deep learning to solve problems in computer vision.</div>
        <div className="cu-cont">
            {dlvJson.units.map((unit, idx) => {
                return <CourseUnit key={idx} idx={idx} unit={unit} />
            })}
        </div>
    </Layout>
);

export default BlogPage;
