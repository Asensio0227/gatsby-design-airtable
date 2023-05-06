import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
  SEO
} from '../components'

const HomePage = ({ data }) => {
  const { allAirtable: { nodes: projects },
    customers: { nodes } } = data;
  
  return (
    <>
      <SEO title="home" />
      <Layout>
        <Hero />
        <About />
        {/* <Projects
        projects={projects}
        title="latest Projects" /> */}
        <GridProjects
          projects={projects}
          title="latest Projects" />
        <Survey />
        <Slider customers={nodes} />
      </Layout>
    </>
  )
};

export const query = graphql`
  query {
    allAirtable(
      filter: {table: {eq: "Projects"}}
      limit: 3
      sort: {data: {date: DESC}}
    ) {
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
    customers: allAirtable(filter: {table: {eq: "Customers"}}) {
      nodes {
        id
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: DOMINANT_COLOR
                  width: 150
                  height: 150
                )
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
