import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class MessageCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string
}
