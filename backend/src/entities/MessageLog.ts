import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { MessageCategory } from './MessageCategory'
import { NotificationType } from './NotificationType'
import { NotificationMessage } from './NotificationMessage'
import { User } from './User'

@Entity()
export class MessageLog {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'timestamptz' })
  createdAt?: Date

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User

  @ManyToOne(() => MessageCategory)
  @JoinColumn({ name: 'messageCategoryId' })
  messageCategory: MessageCategory

  @ManyToOne(() => NotificationType)
  @JoinColumn({ name: 'notificationTypeId' })
  notificationType: NotificationType

  @ManyToOne(() => NotificationMessage)
  @JoinColumn({ name: 'notificationId' })
  notification: NotificationMessage
}
