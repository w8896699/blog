import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledTourSection, StyledCenterBox } from '../aboutComponent/Interest.component';
import ContentfulCard from '../cardComponent/ContentfulCard';

export default class BlogList extends Component {
state = {
  blogs: [],
  sortedBlog: [],
}

componentDidMount() {
  this.setState({
    blogs: this.props.blogs,
    sortedBlog: this.props.blogs,
  });
}

render() {
  return (
    <StyledTourSection>
      <StyledCenterBox>
        {
          this.state.sortedBlog.map(({ node }) => (
            <ContentfulCard key={node.contentful_id} blog={node} currentSlug="blog" />
          ))
        }
      </StyledCenterBox>
    </StyledTourSection>
  );
}
}
