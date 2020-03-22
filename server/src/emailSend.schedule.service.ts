import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EmailService, EmailDB_DTO } from './database/email.service';

@Injectable()
export class TasksService {
  constructor(private emailService: EmailService) {}

  @Cron('0,30 * * * * *')
  async sendEmails() {
    const emailList: EmailDB_DTO[] = await this.emailService.findAll();
    for (const email of emailList)
      if (email.sendAfter < Date.now()) {
        console.log(`Should send email to ${email.email}`);
        this.emailService.remove(email._id);
      } else {
        console.log(`Not sending email to ${email.email}`);
      }
  }
}
