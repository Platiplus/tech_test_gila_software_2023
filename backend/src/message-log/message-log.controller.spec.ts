import { Test } from '@nestjs/testing'
import { MessageLogController } from './message-log.controller'
import { MessageLogService } from './message-log.service'
import { MessageLog } from '../entities/MessageLog'
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm'
import { MockType, repositoryMockFactory } from '../../test/utils/test.utils'
import { NotificationService } from '../notification/notification.service'
import { UserService } from '../user/user.service'
import { User } from '../entities/User'
import { NotificationMessage } from '../entities/NotificationMessage'

describe('MessageLogyController', () => {
  let messageLogController: MessageLogController
  let messageLogService: MessageLogService
  let notificationService: NotificationService
  let userService: UserService
  let repositoryMock: MockType<Repository<MessageLog>>

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MessageLogController],
      providers: [
        MessageLogService,
        NotificationService,
        UserService,
        { provide: getRepositoryToken(MessageLog), useFactory: repositoryMockFactory },
        { provide: getRepositoryToken(User), useFactory: repositoryMockFactory },
        { provide: getRepositoryToken(NotificationMessage), useFactory: repositoryMockFactory },
      ],
    }).compile()

    messageLogService = moduleRef.get<MessageLogService>(MessageLogService)
    notificationService = moduleRef.get<NotificationService>(NotificationService)
    userService = moduleRef.get<UserService>(UserService)
    messageLogController = moduleRef.get<MessageLogController>(MessageLogController)
    repositoryMock = moduleRef.get(getRepositoryToken(MessageLog))
  })

  describe('findAll', () => {
    it('should return an array of message logs', async () => {
      const result = [
        {
          id: 'someId',
          createdAt: new Date(),
          user: { id: 'someId', name: 'name', email: 'some@email.com', phoneNumber: '555' },
          messageCategory: { id: 'someId', description: 'someCategory' },
          notificationType: { id: 'someId', description: 'someNotificationType' },
          notification: { id: 'someId', content: 'someContent' },
        },
      ] as MessageLog[]

      jest.spyOn(messageLogService, 'findAll').mockImplementation(async () => result)

      expect(await messageLogController.findAll('someId')).toBe(result)
    })
  })

  describe('create', () => {
    it('should return a successfull message', async () => {
      const result = { success: true, message: 'Request received, processing it asynchronously' }
      jest.spyOn(messageLogService, 'create').mockImplementation(async () => result)

      expect(await messageLogController.create({ messageCategory: 'someId', content: 'someContent' })).toBe(result)
    })
  })
})
