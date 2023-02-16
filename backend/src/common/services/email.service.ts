import { INotificationSender } from '../interfaces/services/INotificationSender'

export class EmailService implements INotificationSender {
  async send(emailAddress: string, content: string): Promise<string> {
    // Logic that implements the email sending function using some kind of SMTP server
    console.log('You hit the EmailSenderService')
    return 'OK'
  }
}
