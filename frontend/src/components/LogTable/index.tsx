import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { MessageLog } from '../../interfaces/MessageLog'
import { FadeIn } from '../FadeIn'

const columns: ColumnsType<any> = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    width: 120,
  },
  {
    title: 'Category',
    dataIndex: 'messageCategory',
    key: 'messageCategory',
    width: 120,
  },
  {
    title: 'Notification Type',
    dataIndex: 'notificationType',
    key: 'notificationType',
    width: 160,
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
    width: 400,
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    width: 100,
  },
]

const parseTableData = (data: MessageLog[]) => {
  return data
    .map((row) => ({
      key: row.id,
      user: row.user.name,
      messageCategory: row.messageCategory.description,
      notificationType: row.notificationType.description,
      content: row.notification.content,
      date: new Intl.DateTimeFormat('en-US', { timeStyle: 'medium', dateStyle: 'medium' }).format(new Date(row.createdAt)),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const LogTable = ({ data, isLoading }: { data: MessageLog[]; isLoading: boolean }) => {
  const parsedTableData = parseTableData(data)

  return (
    <FadeIn>
      <Table columns={columns} dataSource={parsedTableData} pagination={false} scroll={{ x: 1500, y: 500 }} loading={isLoading} />
    </FadeIn>
  )
}
