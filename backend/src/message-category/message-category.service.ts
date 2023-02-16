import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MessageCategory } from '../entities/MessageCategory'

@Injectable()
export class MessageCategoryService {
  constructor(
    @InjectRepository(MessageCategory)
    private readonly categoryRepository: Repository<MessageCategory>,
  ) {}

  public findAll() {
    return this.categoryRepository.find()
  }
}
