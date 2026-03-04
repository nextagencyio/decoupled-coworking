import { gql } from '@apollo/client'

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed summary }
        statsItems { ... on ParagraphStatItem { id title description { processed } icon } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed summary }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuresTitle
            featuresSubtitle
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description {
                  processed
                }
                icon
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_PLANS = gql`
  query GetPlans($first: Int = 10) {
    nodePlans(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodePlan {
          body { processed summary }
          priceMonthly
          includes { processed summary }
          featured
          idealFor
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_PLAN_BY_PATH = gql`
  query GetPlanByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePlan {
            id
            title
            path
          body { processed summary }
          priceMonthly
          includes { processed summary }
          featured
          idealFor
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_AMENITIES = gql`
  query GetAmenities($first: Int = 10) {
    nodeAmenities(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeAmenity {
          body { processed summary }
          amenityCategory
          availability
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_AMENITY_BY_PATH = gql`
  query GetAmenityByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAmenity {
            id
            title
            path
          body { processed summary }
          amenityCategory
          availability
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query GetEvents($first: Int = 10) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeEvent {
          body { processed summary }
          eventDate { timestamp }
          endDate { timestamp }
          location
          openToPublic
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
          body { processed summary }
          eventDate { timestamp }
          endDate { timestamp }
          location
          openToPublic
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`
