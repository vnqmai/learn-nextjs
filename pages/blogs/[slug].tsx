import MainLayout from '@/components/layouts/main'
import { Post } from '@/interface/models'
import { getMarkDownData } from '@/utils/getMarkDownData'
import { Box, Container } from '@mui/system'
import { GetStaticPropsContext } from 'next'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify/lib'
import remarkParse from 'remark-parse/lib'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import { unified } from 'unified'

export interface IBlogDetailsPageProps {
  post: Post
}

export default function BlogDetailsPage({ post }: IBlogDetailsPageProps) {
  return (
    <Box>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
    </Box>
  )
}

BlogDetailsPage.Layout = MainLayout

export const getStaticPaths = async () => {
  const posts = await getMarkDownData()
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const posts = await getMarkDownData()
  const slug = context?.params?.slug

  if (!slug) {
    return { notFound: true }
  }

  const post = posts.find((post) => post.slug === slug)
  if (!post) {
    return { notFound: true }
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'AGENGA' })
    .use(remarkRehype)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '')

  post.htmlContent = file.toString() || ''

  return {
    props: {
      post,
    },
  }
}
