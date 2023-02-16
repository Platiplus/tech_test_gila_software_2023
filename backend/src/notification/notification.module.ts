import { Module } from '@nestjs/common'
import { NotificationService } from './notification.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NotificationMessage } from '../entities/NotificationMessage'

@Module({
  imports: [TypeOrmModule.forFeature([NotificationMessage])],
  controllers: [],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
