import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from './../src/app.module'
import * as request from 'supertest'

describe('E2E', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('MessageCategoryController', () => {
    it('/message-category (GET)', () => {
      const categories = [
        { id: '748f11b0-204e-4437-87be-0df0d49cb5e6', description: 'Sports' },
        { id: 'b8da44ed-07bd-4ea8-b655-7ccf9157eb6c', description: 'Finance' },
        { id: '1658a017-f52d-423f-896b-637cc273315b', description: 'Movies' },
      ]
      return request(app.getHttpServer()).get('/message-category').expect(200).expect(categories)
    })
  })

  describe('MessageLogController', () => {
    it('/message-log (GET) with non-existent user', () => {
      return request(app.getHttpServer()).get('/message-log?user_id=748f11b0-204e-4437-87be-0df0d49cb5e6').expect(200).expect([])
    })
  })
})
