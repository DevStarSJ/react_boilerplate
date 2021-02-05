import Link from 'next/link'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, LikeOutlined, SlackSquareOutlined, HomeOutlined } from '@ant-design/icons'
import { ReactElement } from 'react'
import { selectedMenuState } from '../libs/states'
import { useRecoilState } from 'recoil'

const { SubMenu, ItemGroup, Item } = Menu

export default function index(): ReactElement {

  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState)

  const menuClick = (e: any) => {
    console.log('click', e)
    setSelectedMenu(e.key)
  }

  return (
    <Menu onClick={menuClick} selectedKeys={[selectedMenu]} mode='horizontal' style={{position: 'absolute', right: '0px'}}>
      <Item key='home' icon={<HomeOutlined />}>
      <Link href="/">
        <a>Home</a>
      </Link>
      </Item>
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
        <Item key='Missions'>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Item>
        <Item key='Team'>Team</Item>
        <Item key='History'>History</Item>
        <Item key='Newsletter'>Newsletter</Item>
      </SubMenu>
    </Menu>
  )
}
