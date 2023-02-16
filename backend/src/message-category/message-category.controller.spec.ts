import { Test } from '@nestjs/testing'
import { MessageCategoryController } from './message-category.controller'
import { MessageCategoryService } from './message-category.service'
import { MessageCategory } from '../entities/MessageCategory'
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'
import { MockType, repositoryMockFactory } from '../../test/utils/test.utils'

describe('MessageCategoryController', () => {
  let messageCategoryController: MessageCategoryController
  let messageCategoryService: MessageCategoryService
  let repositoryMock: MockType<Repository<MessageCategory>>

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MessageCategoryController],
      providers: [MessageCategoryService, { provide: getRepositoryToken(MessageCategory), useFactory: repositoryMockFactory }],
    }).compile()

    messageCategoryService = moduleRef.get<MessageCategoryService>(MessageCategoryService)
    messageCategoryController = moduleRef.get<MessageCategoryController>(MessageCategoryController)
    repositoryMock = moduleRef.get(getRepositoryToken(MessageCategory))
  })

  describe('findAll', () => {
    it('should return an array of message categories', async () => {
      const result = [{ id: 'someId', description: 'Sports' }]
      jest.spyOn(messageCategoryService, 'findAll').mockImplementation(async () => result)

      expect(await messageCategoryController.findAll()).toBe(result)
    })
  })
})
