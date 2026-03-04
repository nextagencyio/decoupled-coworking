
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
export interface DrupalPlan {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  priceMonthly?: string
  includes?: { processed: string; summary?: string }
  featured?: string
  idealFor?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface PlansData {
  nodePlans: {
    nodes: DrupalPlan[]
  }
}

export interface DrupalAmenity {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  amenityCategory?: string
  availability?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface AmenitiesData {
  nodeAmenities: {
    nodes: DrupalAmenity[]
  }
}

export interface DrupalEvent {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  eventDate?: { timestamp: string }
  endDate?: { timestamp: string }
  location?: string
  openToPublic?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}
