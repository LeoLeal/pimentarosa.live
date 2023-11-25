import { gql } from '@apollo/client/core';

export default gql`
fragment ContactFragment on PimentarosaLiveSectionContact {
  title
  text {
    json
  }
  backgroundImage {
    url
  }
}
`;
