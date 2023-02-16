import { Form, Select, Input, Button } from 'antd'
import { ToastContainer, toast } from 'react-toastify'
import { Category } from '../../interfaces/Category'
import { CreateNotificationDto } from '../../interfaces/CreateNotificationDto'

import { useEffect } from 'react'
import { useForm } from 'antd/es/form/Form'
import { useFetchMessageCategoriesQuery, useSendNotificationMutation } from '../../store'

export const NotificationForm = () => {
  const [form] = useForm()
  const [sendNotification, results] = useSendNotificationMutation()
  const { data, isLoading } = useFetchMessageCategoriesQuery({})

  useEffect(() => {
    if (results.isError) {
      toast.error('Error sending notification to server, please try again later.')
    }

    if (results.isSuccess) {
      toast.success('Notification sent successfully.')
    }
  }, [results])

  const onFinish = async () => {
    const values = form.getFieldsValue(true) as CreateNotificationDto
    sendNotification(values)
    form.resetFields()
  }

  return (
    <div style={{ width: '100%', minWidth: '296px', maxWidth: '600px' }}>
      <Form form={form} labelCol={{ span: 8 }} layout="vertical" onFinish={onFinish} style={{ width: '100%' }}>
        <Form.Item label="Notification Category" name={['messageCategory']} rules={[{ required: true, message: 'Missing notification category' }]}>
          <Select loading={isLoading} size={'large'}>
            {!isLoading ? (
              (data as Category[]).map((category) => (
                <Select.Option key={category.id} value={category.id}>
                  {category.description}
                </Select.Option>
              ))
            ) : (
              <></>
            )}
          </Select>
        </Form.Item>
        <Form.Item label="Notification Content" name={['content']} rules={[{ required: true, message: 'Missing notification content' }]}>
          <Input.TextArea size={'large'} style={{ height: 120 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size={'large'} htmlType="submit" loading={results.isLoading}>
            Send
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer position={'bottom-right'} />
    </div>
  )
}
