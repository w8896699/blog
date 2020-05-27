import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link';
import Layout from '../components/layout';
import styles from './single-blog.module.css';

const contentfulBlog = ({ data }) => {
  const {
    title, date, country, description: { json },
  } = data.post;
  console.log(json);
  return (
    <Layout>

      <section className={styles.blog}>

        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>
            {' '}
            Published at :
            {' '}
            {date}
          </h4>
          <p />
          <AniLink fade to="/blog" className="btn-primary">All Posts</AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
query getPost($slug: String!) {
    post: contentfulBlog(slug: {eq: $slug}) {
      title
      date(formatString: "MMMM D, YYYY")
      country
      description{
        json
      }
    }
  }
  
`;

export default contentfulBlog;
