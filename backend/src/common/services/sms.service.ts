import { INotificationSender } from '../interfaces/services/INotificationSender'

export class SmsService implements INotificationSender {
  async send(phone: string, content: string): Promise<string> {
    // Logic that implements the sms sending function using Twilio or something similar
    console.log('You hit the SmsSenderService')
    return 'OK'
  }
}
