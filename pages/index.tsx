import Link from 'next/link'
import Layout from '@components/Layout'
import { Button } from 'antd'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="title">Hello Next.js 👋</h1>
    <Button type="primary">It's Antd Button</Button>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
