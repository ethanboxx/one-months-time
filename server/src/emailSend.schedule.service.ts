import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EmailService, EmailDBDTO } from './database/email.service';
import { SendEmailService } from './email/send.service';

@Injectable()
export class TasksService {
  constructor(
    private emailService: EmailService,
    private sendEmailService: SendEmailService,
  ) {}

  @Cron('0,30 * * * * *')
  async sendEmails() {
    const emailList: EmailDBDTO[] = await this.emailService.findAll();
    for (const email of emailList)
      if (email.sendAfter < Date.now()) {
        console.log(`Should send email to ${email.email}`);
        this.emailService.remove(email._id);
        this.sendEmailService.send(email.email, email.content);
      } else {
        console.log(`Not sending email to ${email.email}`);
      }
  }
}
