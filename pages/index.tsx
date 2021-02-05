import Link from 'next/link'
import { Button } from 'antd'
import { ReactElement } from 'react'
import { COMPANIES } from '../graphql/companies'
import { useQuery } from '@apollo/client'
import Layout from '@components/Layout'

export default function index(): ReactElement {
  const { loading, error, data } = useQuery(COMPANIES)
  console.log(loading, error, data)

  return (
    <Layout title='Socio'>
      <h1 className="title">Hello Next.js 👋</h1>
      <Button type="primary">It's Antd Button</Button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}
