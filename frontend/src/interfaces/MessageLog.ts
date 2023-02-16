export interface MessageLog {
  id: string
  createdAt: string
  messageCategory: {
    id: string
    description: string
  }
  notification: {
    id: string
    content: string
  }
  notificationType: {
    id: string
    description: string
  }
  user: {
    id: string
    email: string
    name: string
    phoneNumber: string
  }
}
