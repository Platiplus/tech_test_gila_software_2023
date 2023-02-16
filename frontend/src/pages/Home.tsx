import { Row } from 'antd'
import { NotificationForm } from '../components/NotificationForm'
import { FadeIn } from '../components/FadeIn'

export const Home = () => {
  return (
    <FadeIn>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <NotificationForm />
      </Row>
    </FadeIn>
  )
}
