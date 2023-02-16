import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from './User'

@Entity()
export class NotificationMessage {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  content: string
}
