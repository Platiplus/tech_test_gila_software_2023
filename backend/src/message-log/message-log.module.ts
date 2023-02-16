import { Module } from '@nestjs/common'
import { MessageLogController } from './message-log.controller'
import { MessageLogService } from './message-log.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MessageLog } from '../entities/MessageLog'
import { NotificationModule } from '../notification/notification.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([MessageLog]),
    NotificationModule,
    UserModule,
  ],
  controllers: [MessageLogController],
  providers: [MessageLogService],
})
export class MessageLogModule {}
