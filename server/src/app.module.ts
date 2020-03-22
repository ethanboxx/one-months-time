import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailSchema } from './schemas/email.schema';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './emailSend.schedule.service';
import { EmailService } from './database/email.service';
import { from } from 'rxjs';
require('dotenv').config();
export const databaseUrl = `mongodb+srv://${process.env.DATABASEUSR}:${process.env.DATABASEPWD}@main-hfm9w.mongodb.net/test?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl, {
      auth: { authdb: 'admin' },
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Email', schema: EmailSchema }]),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [TasksService, EmailService],
})
export class AppModule {}
