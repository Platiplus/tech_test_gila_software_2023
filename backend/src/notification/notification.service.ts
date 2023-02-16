import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { NotificationMessage } from '../entities/NotificationMessage'
import { NotificationDto } from '../common/interfaces/dto/NotificationDto'

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationMessage)
    private readonly notificationRepository: Repository<NotificationMessage>,
  ) {}

  public async create(n: NotificationDto) {
    const notification = this.notificationRepository.create(n)
    return this.notificationRepository.save(notification)
  }

  public async delete(id: string) {
    const notification = await this.notificationRepository.findOneBy({ id })
    if (notification) {
      return this.notificationRepository.remove(notification)
    }
  }
}
