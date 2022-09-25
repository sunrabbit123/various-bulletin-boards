import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardRepository } from './repository/board';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'record',
      autoLoadEntities: true,
      synchronize: true,
      entities: [`${__dirname}/**/*/entity/*.{ts, js}`],
      logging: true,
      url: process.env.DB_URL,
    }),
    TypeOrmModule.forFeature([BoardRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
