import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EmailService } from './database/email.service';

@Injectable()
export class TasksService {
  constructor(private emailService: EmailService) {}

  @Cron('* * * * * *')
  async handleCron() {
    console.log(await this.emailService.findAll());
  }
}
