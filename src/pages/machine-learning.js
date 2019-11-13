import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import mlJson from './machine-learning.json';

const BlogPage = () => (
    <Layout>
        <SEO title="Machine Learning" />
        <h1>Machine Learning</h1>
        <div>Get an introduction to Machine Learning, with a strong focus on practically applying what you learn.</div>
        <div className="cu-cont">
            {mlJson.units.map((unit, idx) => {
            return <div className="cu-unit">
                <div className="">
                    <span className="cu-num">{idx+1}</span><span className="cu-title">{unit.title}</span>
                </div>
                <div className="cu-body">
                    {unit.items && unit.items.map(item => {
                        return <div>{item}</div>;
                    })}
                </div>
            </div>
            })}
        </div>
    </Layout>
);

export default BlogPage;
