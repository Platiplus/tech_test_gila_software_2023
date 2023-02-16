import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { MessageLogService } from './message-log.service'

@Controller('message-log')
export class MessageLogController {
  constructor(private readonly logService: MessageLogService) {}
  @Get()
  findAll(@Query('user_id') user_id: string) {
    return this.logService.findAll(user_id)
  }

  @Post()
  create(@Body() log: any) {
    return this.logService.create(log)
  }
}
