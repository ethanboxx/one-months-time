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
import { DATABASEUSR, EMAILUSR, DATABASEPWD, PRODUCTION } from './env';
export const databaseUrl = `mongodb+srv://${DATABASEUSR}:${DATABASEPWD}@main-hfm9w.mongodb.net/${PRODUCTION ? "prod" : "testing" }?retryWrites=true&w=majority`;
export const emailUrl = `smtps://${EMAILUSR}@gmail.com:${DATABASEPWD}@smtp.gmail.com`;
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
