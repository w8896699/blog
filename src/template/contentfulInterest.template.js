import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link';
import Layout from '../components/layout';
import ContentfulRichText from '../components/contentfulComponent/ContentfulRichText.component';

const StyledSection = styled.section`
  padding: 4rem 0;
  letter-spacing: 2px;
  h1,
  h4 {
  text-transform: capitalize;
  }
`;

const StyledCentreDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const StyledPost = styled.article`
margin: 2rem 0;
`;
const contentfulInterest = ({ data }) => {
  const {
    title, date, subtitle, description: { json },
  } = data.interest;
  // 这里的image不是gatsbyimage, 没有fluid
  //   const options = {
  //     renderNode: {
  //       'embedded-asset-block': (node) => {
  //         console.log(node);
  //         return (
  //           <div>
  //             <video controls>
  //               <source src={node.data.target.fields.file['en-US'].url} type="video/mp4" />
  //               <p>Your browser doesnt support HTML5 video.</p>
  //             </video>
  //             {/* <img width="400" src={node.data.target.fields.file['en-US'].url} alt="about" /> */}
  //           </div>
  //         );
  //       },
  //     },
  //   };
  return (
    <Layout>
      <StyledSection>
        <StyledCentreDiv>
          <h1>{title}</h1>
          <h4>
            {' '}
            Published at :
            {' '}
            {date}
          </h4>
          <h4>{subtitle}</h4>
          <StyledPost>{ContentfulRichText(json)}</StyledPost>
          <AniLink fade="true" to="/interest" className="btn-primary">Go Back</AniLink>
        </StyledCentreDiv>
      </StyledSection>
    </Layout>
  );
};

export const query = graphql`
query getInterest($slug: String!) {
    interest: contentfulInterest(slug: {eq: $slug}) {
      title
      date(formatString: "MMMM D, YYYY")
      subtitle
      description{
          json
      }
    }
  }
`;

export default contentfulInterest;
