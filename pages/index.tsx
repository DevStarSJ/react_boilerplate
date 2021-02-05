import Link from 'next/link'
import Head from 'next/head'
import { Button, Layout } from 'antd'
import { ReactElement, useState } from 'react'
import { COMPANIES } from '../graphql/companies'
import { useQuery } from '@apollo/client'
import Menu from '@components/Menu'

const { Sider, Header, Footer, Content } = Layout

export default function index(): ReactElement {
  const { loading, error, data } = useQuery(COMPANIES)
  console.log(loading, error, data)

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = ()  => setCollapsed(!collapsed)

  return (
    
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>{"Home | Next.js + TypeScript Example"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        >
      </Sider>
      <Layout>
        <Header style={{ background: '#FFFFFF'}}>
          <Menu />
        </Header>
        <Content>
          <h1 className="title">Hello Next.js 👋</h1>
          <Button type="primary">It's Antd Button</Button>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
        </Content>
        <Footer>
          <hr />
          <span><b>(주)제이든컨설팅</b> 대표자 : 제이든 사업자등록번호 : 000-00-00000</span><br />
          <span>서울특X시 서X구 서초중X로2X길 2X (서X동, 골X빌딩) X층</span><br />
          <span>TEL : 00-000-0000 FAX : 00-000-0000 E-mail : seokjoon.yun@gmail.com</span><br />
          <span>Copyright© 2021 Jayden Consulting. All Rights Reserved.</span><br />
          
        </Footer>
      </Layout>
    </Layout>
  )
}
