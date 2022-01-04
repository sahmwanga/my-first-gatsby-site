import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

function BlogPage({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allContentfulBlog.edges.map((edge) => (
        <pre>{JSON.stringify(edge, null, 2)}</pre>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulBlog(sort: { fields: contentful_id }) {
      edges {
        node {
          id
          title
          content {
            raw
          }
          updatedAt
        }
      }
    }
  }
`;

export default BlogPage;
