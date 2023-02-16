import { Layout, Menu } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content } = Layout

export const Navigation = () => {
  const navigate = useNavigate()

  return (
    <>
      <Layout>
        <Header
          style={{
            top: 0,
            height: 65,
            zIndex: 1,
            width: '100%',
            backgroundColor: '#f5f5f5',
          }}
        >
          <Menu
            style={{
              backgroundColor: '#f5f5f5',
              borderBottom: 0,
            }}
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={[
              { key: 'home', label: 'Home', onClick: () => navigate('/') },
              { key: 'logs', label: 'Logs', onClick: () => navigate('/logs') },
            ]}
          />
        </Header>
      </Layout>
      <Content style={{ padding: '64px 50px' }}>
        <Outlet />
      </Content>
    </>
  )
}
