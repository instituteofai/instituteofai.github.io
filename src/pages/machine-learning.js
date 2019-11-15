import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import mlJson from './machine-learning.json';
import CourseUnit from '../components/course-unit';

const BlogPage = () => (
    <Layout>
        <SEO title="Machine Learning" />
        <h1>Machine Learning</h1>
        <div>Get an introduction to Machine Learning, with a strong focus on practically applying what you learn.</div>
        <div className="cu-cont">
            {mlJson.units.map((unit, idx) => {
                return <CourseUnit key={idx} idx={idx} unit={unit} />
            })}
        </div>
    </Layout>
);

export default BlogPage;
