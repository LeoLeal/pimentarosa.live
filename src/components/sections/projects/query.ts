import { gql } from '@apollo/client/core';

export default gql`
fragment ProjectsFragment on PimentarosaLiveSectionProjects {
  title
  projectsCollection {
    items {
      title
      role
      dateDescription
      image {
        description
        url
      }
    }
  }
}
`;
