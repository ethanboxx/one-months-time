import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailSchema } from './schemas/email.schema';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './emailSend.schedule.service';
import { EmailService } from './database/email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { SendEmailService } from './email/send.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
require('dotenv').config();
export const databaseUrl = `mongodb+srv://${process.env.DATABASEUSR}:${process.env.DATABASEPWD}@main-hfm9w.mongodb.net/test?retryWrites=true&w=majority`;
export const emailUrl = `smtps://${process.env.EMAILUSR}@gmail.com:${process.env.DATABASEPWD}@smtp.gmail.com`;
@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Email', schema: EmailSchema }]),
    ScheduleModule.forRoot(),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: emailUrl,
        defaults: {
          from: '"One Months Time" <onemonthstime@gmail.com>',
        },
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [TasksService, EmailService, SendEmailService],
})
export class AppModule {}
