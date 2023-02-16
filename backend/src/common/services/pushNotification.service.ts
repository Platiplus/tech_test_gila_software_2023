import { INotificationSender } from '../interfaces/services/INotificationSender'

export class PushNotificationService implements INotificationSender {
  async send(phone: string, content: string): Promise<string> {
    // Logic that implements the push notification using firebase or something similar
    console.log('You hit the PushNotificationSenderService')
    return 'OK'
  }
}
