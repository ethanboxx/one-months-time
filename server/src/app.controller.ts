import { Controller, Get, Post, Body } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { months, weeks } from './database/timeTransformation';
import { EmailService } from './database/email.service';

@Controller()
export class AppController {
  constructor(
    private emailService: EmailService,
    @InjectModel('Email') private emailModel: Model<EmailDto>,
  ) {}

  @Post()
  async create(@Body() createEmailDto: EmailDto): Promise<EmailDto> {
    return this.emailService.create(createEmailDto);
  }
  @Get()
  async findAll(): Promise<EmailDto[]> {
    return this.emailService.findAll();
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
