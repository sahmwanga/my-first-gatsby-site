import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

function BlogPage({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allFile.nodes.map((post) => (
        <li key={post.name}>{post.name}</li>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
