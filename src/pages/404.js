import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/homepageComponent/homepageBanner';

const StyledBanner = styled.div`
  background: var(--primaryColor);
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledBanner>
      <Banner title="404! NOT FOUND" info="I haven&#39;t come up with this page yet.">
        <Link className="btn-white" to="/"> Back to Home Page</Link>
      </Banner>
    </StyledBanner>
  </Layout>
);

export default NotFoundPage;
