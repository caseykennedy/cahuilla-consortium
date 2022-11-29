// TODO: More consistent naming / nesting

type ImageShape = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64: string
  tracedSVG: string
  srcWebp: string
  srcSetWebp: string
}

// Create Ref
// _____________________________________________________________

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  // immutable
  readonly current: T | null
}

// Post shape
// _____________________________________________________________

type PostShape = {
  posts: {
    edges: PostEdges[]
  }
}

type PostEdges = {
  node: PostQuery
}

type PostData = {
  post: PostQuery
}

type PostQuery = {
  author: string
  title: string
  _rawExcerpt: string
  _rawBody: string
  _id: string
  publishedAt: string
  slug: {
    current: string
  }
  figure: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  categories: {
    title: string
  }[]
}

type PostContextShape = {
  pageContext: {
    post: PostQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Resource shape
// _____________________________________________________________

type ResourceShape = {
  resources: {
    edges: ResourceEdges[]
  }
}

type ResourceEdges = {
  node: ResourceQuery
}

type ResourceData = {
  resource: ResourceQuery
}

type ResourceQuery = {
  asset: {
    asset: {
      description: string
      id: string
      title: string
      url: string
    }
  }
  isVideo: boolean
  author: string
  title: string
  _rawExcerpt: string
  _rawBody: string
  _id: string
  publishedAt: string
  slug: {
    current: string
  }
  figure: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  categories: {
    title: string
  }[]
}

type ResourceContextShape = {
  pageContext: {
    post: ResourceQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Policy shape
// _____________________________________________________________

type PolicyShape = {
  policies: {
    edges: PolicyEdges[]
  }
}

type PolicyEdges = {
  node: PolicyQuery
}

type PolicyData = {
  policy: PolicyQuery
}

type PolicyQuery = {
  asset: {
    asset: {
      description: string
      id: string
      title: string
      url: string
    }
  }
  isVideo: boolean
  author: string
  title: string
  _rawExcerpt: string
  _rawBody: string
  _id: string
  publishedAt: string
  slug: {
    current: string
  }
  figure: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  categories: {
    title: string
  }[]
}

type PolicyContextShape = {
  pageContext: {
    post: PolicyQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Person shape
// _____________________________________________________________

type PersonNode = {
  avatar: {
    asset: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
  }
  name: string
  title: string
  slug: {
    _key: string
    current: string
  }
}

type PersonEdges = {
  node: PersonNode
}

type PersonShape = {
  people: {
    edges: PersonEdges[]
  }
}
