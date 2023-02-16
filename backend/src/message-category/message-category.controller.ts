import { Controller, Get } from '@nestjs/common'
import { MessageCategoryService } from './message-category.service'

@Controller('message-category')
export class MessageCategoryController {
  constructor(private readonly messageCategoryService: MessageCategoryService) {}
  @Get()
  findAll() {
    return this.messageCategoryService.findAll()
  }
}
