import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Projects, Algolia, SEO } from '../components'

const ProjectsPage = ({data}) => {
  const { allAirtable: { nodes: projects } } = data;
  return (
    <>
      <SEO title="our projects"/>
    <Wrapper>
      <Layout>
        <Projects projects={projects} title="our projects" page />
        <Algolia/>
      </Layout>
    </Wrapper>
    </>
  )
}


const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export const query = graphql`
  query {
    allAirtable(filter: {table: {eq: "Projects"}}, sort: {data: {date: DESC}}) {
      nodes {
        id
        data {
          date(formatString: "MMMM, Do YYYY")
          type
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
