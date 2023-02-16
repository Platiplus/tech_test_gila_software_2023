import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MessageLog } from '../entities/MessageLog'
import { NotificationService } from '../notification/notification.service'
import { MessageLogDto } from '../common/interfaces/dto/MessageLogDto'
import { UserService } from '../user/user.service'
import { NotificationSenderContext } from '../common/context/NotificationSender.context'
import { User } from '../entities/User'

@Injectable()
export class MessageLogService {
  constructor(
    @InjectRepository(MessageLog)
    private readonly logRepository: Repository<MessageLog>,
    private readonly notificationService: NotificationService,
    private readonly userService: UserService,
  ) {}

  public findAll(user_id: string) {
    return this.logRepository.find({
      relations: ['user', 'messageCategory', 'notificationType', 'notification'],
      where: { user: { id: user_id } },
    })
  }

  public async create(body: MessageLogDto) {
    const { content, messageCategory } = body
    const users = await this.userService.findAll()
    const notification = await this.notificationService.create({ content })

    for (const user of users) {
      const userIsSubscribed = this.checkCategorySubscription(user, messageCategory)

      if (userIsSubscribed) {
        const deliveryMethods = user.subscribedChannels

        for (const deliveryMethod of deliveryMethods) {
          try {
            const sender = new NotificationSenderContext(deliveryMethod.description)
            await sender.sendNotification(user, { deliveryMethod: deliveryMethod.description, content: notification.content })
            await this.logNotificationOnDatabase(messageCategory, notification.id, deliveryMethod.id, user.id)
          } catch (error) {
            await this.notificationService.delete(notification.id)
            return { error: true, message: 'Please contact administrator' }
          }
        }
      }
    }

    return { success: true, message: 'Request received, processing it asynchronously' }
  }

  public checkCategorySubscription(user: User, categoryId: string) {
    return user.subscribedCategories.find((cat) => cat.id === categoryId)
  }

  public logNotificationOnDatabase(messageCategory: string, id: string, typeId: string, userId: string) {
    const log = this.logRepository.create({
      user: { id: userId },
      messageCategory: { id: messageCategory },
      notificationType: { id: typeId },
      notification: { id },
      createdAt: new Date().toISOString(),
    })
    return this.logRepository.save(log)
  }
}
