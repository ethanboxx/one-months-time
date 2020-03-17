import { Controller, Get, Post, Body } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { months } from './timeTransformation';

@Controller()
export class AppController {
  constructor(@InjectModel('Email') private emailModel: Model<EmailDto>) {}

  @Post()
  async create(@Body() createEmailDto: EmailDto): Promise<EmailDto> {
    const createdEmail = new this.emailModel({
      email: createEmailDto.email,
      content: createEmailDto.content,
      sendAfter: Date.now() + months(1),
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
}
