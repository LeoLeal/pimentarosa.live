import { gql } from '@apollo/client/core';

export default gql`
fragment SocialMediaFragment on PimentarosaLiveSectionSocialMedia {
  title
  primaryLabel
  demographicsLabel
  socialMediaCollection(limit: 5) {
    items {
      name
      url
      logo {
        title
        url
      }
      background
      eyebrowText
      description {
        json
      }
      primary
      statsCollection {
        items {
          label
          value
          unit
        }
      }
      demographicsCollection(limit: 5) {
        items {
          label
          percentagesCollection(limit: 8) {
            items {
              label
              percentage
            }
          }
        }
      }
    }
  }
}
`;
