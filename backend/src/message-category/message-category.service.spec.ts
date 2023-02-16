import { Test } from '@nestjs/testing'
import { MessageCategoryService } from './message-category.service'
import { MessageCategory } from '../entities/MessageCategory'
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'
import { MockType, repositoryMockFactory } from '../../test/utils/test.utils'

describe('MessageCategoryService', () => {
  let messageCategoryService: MessageCategoryService
  let repositoryMock: MockType<Repository<MessageCategory>>

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [],
      providers: [MessageCategoryService, { provide: getRepositoryToken(MessageCategory), useFactory: repositoryMockFactory }],
    }).compile()

    messageCategoryService = moduleRef.get<MessageCategoryService>(MessageCategoryService)
    repositoryMock = moduleRef.get(getRepositoryToken(MessageCategory))
  })

  describe('find', () => {
    it('should return an array of message categories', async () => {
      const result = [{ id: 'someId', description: 'Sports' }]
      jest.spyOn(repositoryMock, 'find').mockImplementation(async () => result)

      expect(await messageCategoryService.findAll()).toBe(result)
    })
  })
})
