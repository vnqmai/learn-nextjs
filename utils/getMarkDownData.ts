import { Post } from '@/interface/models'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const BLOG_FOLDER = path.join(process.cwd(), 'blogs')
export async function getMarkDownData() {
  let results: Post[] = []
  const files = fs.readdirSync(BLOG_FOLDER)
  for (const file of files) {
    const filePath = path.join(BLOG_FOLDER, file)
    const fileData = fs.readFileSync(filePath, 'utf-8')
    const { content, excerpt, data } = matter(fileData, {
      excerpt: true,
      excerpt_separator: '<!-- truncate-->',
    })
    results.push({
      id: file,
      slug: data.slug,
      title: data.title,
      author: {
        title: data.author_title,
        url: data.author_url,
        imageUrl: data.author_image_url,
      },
      tagsList: data.tags,
      publishedDate: new Date().getTime(),
      description: excerpt || '',
      mdContent: content,
    })
  }
  return results
}
