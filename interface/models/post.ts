export interface Author {
  title: string
  url: string
  imageUrl: string
}

export interface Post {
  id: number | string
  title: string
  publishedDate: number
  tagsList: string[]
  description: string
  slug: string
  author?: Author
  mdContent: string
}
