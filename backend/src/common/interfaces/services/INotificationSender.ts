export interface INotificationSender {
  send(address: string, content: string): Promise<string>
}
