import { gql } from '@apollo/client/core';

export default gql`
fragment PageHeroFragment on PimentarosaLiveSectionPageHero {
  title
  text {
    json
  }
  background {
    title
    description
    url
  }
  readMoreLabel
}
`;
