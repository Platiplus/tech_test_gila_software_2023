import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { MessageCategory } from './MessageCategory'
import { NotificationType } from './NotificationType'
import {MessageLog} from './MessageLog'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phoneNumber: string

  @ManyToMany(() => MessageCategory)
  @JoinTable()
  subscribedCategories: MessageCategory[]

  @ManyToMany(() => NotificationType)
  @JoinTable()
  subscribedChannels: NotificationType[]

  @OneToMany(() => MessageLog, (log) => log.user)
  notifications: MessageLog[]
}
