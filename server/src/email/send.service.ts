import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}

  async send(_to: string, content: string) {
    await this.mailerService.sendMail({
      to: _to, // list of receivers
      from: 'onemonthstime@gmail.com', // sender address
      subject: 'An Email from your future self.', // Subject line
      html: `<b>${content}</b>`, // HTML body content
    });
  }
}
