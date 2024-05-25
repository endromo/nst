import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controllers';

@Module({
  imports: [],
  controllers: [AppController, HeroController],
  providers: [AppService],
})
export class AppModule {}
