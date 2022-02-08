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
// ___________________________________________________________________

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  // immutable
  readonly current: T | null
}

// Post shape
// ___________________________________________________________________

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
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
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
// ___________________________________________________________________

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
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
  }
  categories: {
    title: string
  }[]
}

type ResourceContextShape = {
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

// Person shape
// ___________________________________________________________________

type PersonNode = {
  avatar: {
    asset: {
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
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