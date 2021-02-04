import Link from 'next/link'
import Head from 'next/head'
import { Button, Layout, Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, LikeOutlined, SlackSquareOutlined } from '@ant-design/icons'
import { ReactElement, useState } from 'react'
import { COMPANIES } from '../graphql/companies'
import { useQuery } from '@apollo/client'

const { Sider, Header, Footer, Content } = Layout
const { SubMenu, ItemGroup, Item } = Menu

export default function index(): ReactElement {
  const { loading, error, data } = useQuery(COMPANIES)
  console.log(loading, error, data)

  const [collapsed, setCollapsed] = useState(false)
  const [selected, setSelected] = useState(undefined)

  const onCollapse = ()  => setCollapsed(!collapsed)

  const menuClick = (e: any) => {
    console.log('click', e)
    setSelected(e.key)
  }

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
          <Menu onClick={menuClick} selectedKeys={[selected]} mode='horizontal' style={{position: 'absolute', right: '0px'}}>
            <Item key='mail' icon={<MailOutlined />}>
              offer
            </Item>
            <Item key='app' icon={<AppstoreOutlined />}>
              Events
            </Item>
            <SubMenu key='Regions' icon={<SettingOutlined />} title='Regions'>
              <ItemGroup title='서울경기'>
                <Item key='서울'>서울</Item>
                <Item key='경기'>경기</Item>
              </ItemGroup>
              <ItemGroup title='전국'>
                <Item key='경상도'>경상도</Item>
                <Item key='전라도'>전라도</Item>
                <Item key='충청도'>충청도</Item>
                <Item key='강원도'>강원도</Item>
              </ItemGroup>
            </SubMenu>
            <SubMenu key='Sociocracy' icon={<SlackSquareOutlined />} title='Sociocracy'>
              <Item key='4 Basic Principles'>4 Basic Principles</Item>
              <Item key='For What & Who ?'>For What & Who ?</Item>
              <Item key='Videos'>Videos</Item>
              <Item key='Tools & Referneces'>Tools & Referneces</Item>
            </SubMenu>
            <SubMenu key='about us' icon={<LikeOutlined />} title='about us'>
              <Item key='Missions'>Missions</Item>
              <Item key='Team'>Team</Item>
              <Item key='History'>History</Item>
              <Item key='Newsletter'>Newsletter</Item>
            </SubMenu>
          </Menu>
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
