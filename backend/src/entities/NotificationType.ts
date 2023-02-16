import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class NotificationType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string
}
