import { Controller, Get, Post, Body } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { months, weeks } from './timeTransformation';

@Controller()
export class AppController {
  constructor(@InjectModel('Email') private emailModel: Model<EmailDto>) {}

  @Post()
  async create(@Body() createEmailDto: EmailDto): Promise<EmailDto> {
    const createEmail: Email = {
      email: createEmailDto.email,
      content: createEmailDto.content,
      sendIn: createEmailDto.month != undefined ? months(1) : weeks(1),
    };
    console.log(createEmailDto);
    const createdEmail = new this.emailModel({
      email: createEmail.email,
      content: createEmail.content,
      sendAfter: Date.now() + createEmail.sendIn,
    });
    return createdEmail.save();
  }
  @Get()
  async findAll(): Promise<EmailDto[]> {
    return this.emailModel.find().exec();
  }
}

interface EmailDto {
  email: string;
  content: string;
  month: string | undefined;
  week: string | undefined;
}

interface Email {
  email: string;
  content: string;
  sendIn: number;
}
