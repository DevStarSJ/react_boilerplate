import Link from 'next/link'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, LikeOutlined, SlackSquareOutlined, HomeOutlined, FormOutlined } from '@ant-design/icons'
import { ReactElement } from 'react'
import { selectedMenuState } from '../libs/states'
import { useRecoilState } from 'recoil'

const { SubMenu, Item } = Menu

const MenuItem = (key: string, title: string, href: string, icon?: ReactElement): ReactElement => {
  return (
    <Item key={key}  icon={icon}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </Item>
  )
}

export default function index(): ReactElement {

  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState)

  const menuClick = (e: any) => {
    console.log('click', e)
    setSelectedMenu(e.key)
  }

  return (
    <Menu onClick={menuClick} selectedKeys={[selectedMenu]} mode='horizontal' style={{position: 'absolute', right: '0px'}}>
      {MenuItem('home', 'Home', '/', <HomeOutlined />)}
      {MenuItem('editor', 'Editor', '/editor', <FormOutlined />)}
      <SubMenu key='Sociocracy' icon={<SlackSquareOutlined />} title='소시오크라시 개요'>
        {MenuItem('sociocracyWhat', '소시오크라시란 ?', '/sociocracy/what')}
        {MenuItem('sociocracyPrinciples', '3가지 기본원리', '/sociocracy/principles')}
        {MenuItem('sociocracyHistory', '소시오크라시 발전사', '/sociocracy/history')}
      </SubMenu>
      <SubMenu key='about' icon={<LikeOutlined />} title='About us'>
        {MenuItem('aboutVma', 'VMA', '/about/vma')}
        {MenuItem('aboutIntroduction', '팀소개', '/about/introduction')}
        {MenuItem('aboutCases', '사례', '/about/cases')}
      </SubMenu>
      <SubMenu key='programs' icon={<AppstoreOutlined />} title='교육 & 컨설팅'>
        {MenuItem('programs1', '교육1', '/programs/1')}
        {MenuItem('programs2', '교육2', '/programs/2')}
        {MenuItem('programs3', '교육3', '/programs/3')}
      </SubMenu>
      <SubMenu key='certifications' icon={<SettingOutlined />} title='인증안내'>
        {MenuItem('certifications1', '교육1', '/certifications/1')}
        {MenuItem('certifications2', '교육2', '/certifications/2')}
        {MenuItem('certifications3', '교육3', '/certifications/3')}
      </SubMenu>
      {MenuItem('events', '서클 & 이벤트', '/events', <MailOutlined />)}
    </Menu>
  )
}
