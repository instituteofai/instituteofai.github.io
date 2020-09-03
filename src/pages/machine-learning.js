import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import mlJson from './machine-learning.json';
import CourseUnit from '../components/course-unit';
import gitHubIcon from '../images/GitHub-Mark-32px.png';

const BlogPage = () => (
    <Layout>
        <SEO title="Machine Learning" />
        <div
            style={{
                display: 'flex'
              }}
        >
            <h1>Machine Learning</h1>&nbsp;
            <a href="https://github.com/instituteofai/ML-101" target="_blank">
                <img
                style={{
                    margin: 'auto'
                }}
                src={gitHubIcon}
                alt="ML101-GitHub Link"
                />
            </a>
        </div>
        <div>Get an introduction to Machine Learning, with a strong focus on practically applying what you learn.</div>
        <div className="cu-cont">
            {mlJson.units.map((unit, idx) => {
                return <CourseUnit key={idx} idx={idx} unit={unit} />
            })}
        </div>
    </Layout>
);

export default BlogPage;
