import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { projectAPI } from 'APIS'
import { useAuth } from 'Hooks'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES_NAME } from 'Routes/constans'
import { MainContent, MainStyled, Title } from './styled'

const MainLayout = ({ children, title }) =>
{
  const { auth } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await projectAPI.signOut()
    navigate(ROUTES_NAME.SIGN_IN)
  }

  return <MainStyled>
    <Title>
      <span>{title}</span>
      {auth && <Button onClick={handleSignOut} icon={<LogoutOutlined />}>Sign out</Button>}
    </Title>
    <MainContent>
      {children}
    </MainContent>
  </MainStyled>
}

export default MainLayout
