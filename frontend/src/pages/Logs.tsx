import { Button, Row, Col, Spin } from 'antd'
import { LogTable } from '../components/LogTable'
import { FadeIn } from '../components/FadeIn'
import { useLazyFetchNotificationsQuery } from '../store'
import { useState, useEffect } from 'react'

export const Logs = () => {
  const [userId, setUserId] = useState('')
  const [fetchNotificationsFromUser, notifications] = useLazyFetchNotificationsQuery()

  useEffect(() => {
    if (userId) fetchNotificationsFromUser(userId)
  }, [userId])

  return (
    <FadeIn>
      {/* Hardcoded values to avoid user authentication logic */}
      <Col style={{ marginBottom: 36 }}>
        <Row justify={'center'}>
          <h3>Please select a user to see the logs</h3>
        </Row>
        <Row justify={'center'} gutter={[16, 16]}>
          <Col>
            <Button onClick={() => setUserId('b6efdb38-8547-4bce-befa-e41db21bc04e')}>Test User 1</Button>
          </Col>
          <Col>
            <Button onClick={() => setUserId('1ed3d462-6fd8-45b7-8570-246c06c1eb1e')}>Test User 2</Button>
          </Col>
          <Col>
            <Button onClick={() => setUserId('4c9fc6b5-3187-467c-80af-efa880a83fdf')}>Test User 3</Button>
          </Col>
        </Row>
      </Col>
      <>{notifications.isSuccess && <LogTable data={notifications.data || []} isLoading={notifications.isLoading} />}</>
      <>{notifications.isError && <LogTable data={[]} isLoading={notifications.isLoading} />}</>
      <>
        {notifications.isLoading && (
          <Row justify={'center'}>
            <Spin size="large" spinning={notifications.isLoading} />
          </Row>
        )}
      </>
    </FadeIn>
  )
}
