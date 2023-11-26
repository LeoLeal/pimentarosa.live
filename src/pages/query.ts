import { gql } from '@apollo/client/core';
import PageHeroFragment from '../components/page-hero/query';
import SocialMediaFragment from '../components/social-media/query';
import ProjectsFragment from '../components/projects/query';
import ContactFragment from '../components/contact/query';

export const pageQuery = gql`
${PageHeroFragment}
${SocialMediaFragment}
${ProjectsFragment}
${ContactFragment}

query GetPages($locale: String, $path: String = "/") {
  commonPageCollection(limit: 1, locale: $locale, where: { path: $path }) {
    items {
      metadata {
        title
        description
        twitterCardType
        canonical
        openGraphImage {
          title
          description
          url
        }
      }
      path
      sectionsCollection(limit: 10) {
        items {
          ... PageHeroFragment
          ... SocialMediaFragment
          ... ProjectsFragment
          ... ContactFragment
        }
      }
    }
  }
}
`

export const pathsQuery = gql`
query GetPaths {
  commonPageCollection(limit: 100, where: { 
    contentfulMetadata : { 
      tags: { 
        id_contains_some: "pimentarosa"
      }
    }
  }) {
    items {
      path
    }
  }
}
`