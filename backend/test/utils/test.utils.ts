import { Repository } from 'typeorm'

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<any>
}

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  find: jest.fn((entity) => entity),
  delete: jest.fn((entity) => entity),
  remove: jest.fn((entity) => entity),
  save: jest.fn((entity) => entity),
  create: jest.fn((entity) => entity),
  findBy: jest.fn((entity) => entity),
}))
