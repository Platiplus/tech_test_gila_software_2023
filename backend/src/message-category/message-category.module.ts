import { Module } from '@nestjs/common'
import { MessageCategoryController } from './message-category.controller'
import { MessageCategoryService } from './message-category.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MessageCategory } from '../entities/MessageCategory'

@Module({
  imports: [TypeOrmModule.forFeature([MessageCategory])],
  controllers: [MessageCategoryController],
  providers: [MessageCategoryService],
})
export class MessageCategoryModule {}
