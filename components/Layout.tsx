import Head from 'next/head'
import { Layout } from 'antd'
import { ReactElement, ReactNode } from 'react'
import Menu from '@components/Menu'

const { Header, Footer, Content } = Layout

type Props = {
  children?: ReactNode
  title?: string
}

export default function index({ children, title = 'This is the default title' }: Props): ReactElement {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header style={{ background: '#FFFFFF'}}>
        {/* TODO: 링크컨설팅, 유투브 */}
        <Menu />
      </Header>
      <Content>
      {children}
      </Content>
      <Footer>
        <hr />
        <span><b>(주)제이든컨설팅</b> 대표자 : 제이든 사업자등록번호 : 000-00-00000</span><br />
        <span>서울특X시 서X구 서초중X로2X길 2X (서X동, 골X빌딩) X층</span><br />
        <span>TEL : 00-000-0000 FAX : 00-000-0000 E-mail : seokjoon.yun@gmail.com</span><br />
        <span>Copyright© 2021 Jayden Consulting. All Rights Reserved.</span><br />
        
      </Footer>
    </Layout>
  )
}
