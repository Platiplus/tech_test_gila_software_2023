import { INotificationSender } from '../interfaces/services/INotificationSender'
import { EmailService } from '../services/email.service'
import { SmsService } from '../services/sms.service'
import { PushNotificationService } from '../services/pushNotification.service'
import { AVAILABLE_STRATEGIES } from '../enums/availableStrategies.enum'
import { User } from '../../entities/User'

export class NotificationSenderContext {
  private strategy: INotificationSender

  constructor(strategy: string) {
    const availableStrategies = {
      [AVAILABLE_STRATEGIES.EMAIL]: new EmailService(),
      [AVAILABLE_STRATEGIES.SMS]: new SmsService(),
      [AVAILABLE_STRATEGIES.PUSH]: new PushNotificationService(),
    }

    this.strategy =
      availableStrategies[strategy] ||
      availableStrategies[AVAILABLE_STRATEGIES.EMAIL]
  }

  public async sendNotification(
    user: User,
    metadata: { deliveryMethod: string; content: string },
  ): Promise<string> {
    const { deliveryMethod, content } = metadata

    let address: string

    if (deliveryMethod === AVAILABLE_STRATEGIES.EMAIL) address = user.email
    if (deliveryMethod === AVAILABLE_STRATEGIES.SMS) address = user.phoneNumber
    if (deliveryMethod === AVAILABLE_STRATEGIES.PUSH) address = user.phoneNumber

    const result = await this.strategy.send(address, content)

    return result
  }
}
