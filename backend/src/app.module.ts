import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MessageLogModule } from './message-log/message-log.module'
import { MessageCategoryModule } from './message-category/message-category.module'

import Entities from './entities'

@Module({
  imports: [
    MessageLogModule,
    MessageCategoryModule,
    TypeOrmModule.forRoot({
      type: (process.env.DB_TYPE as any) || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'gila_software_test',
      entities: [...Entities],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
