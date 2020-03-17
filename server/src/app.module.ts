import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailSchema } from './schemas/email.schema';
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
  ],
  controllers: [AppController],
})
export class AppModule {}
