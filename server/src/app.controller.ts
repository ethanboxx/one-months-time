import { Controller, Get, Post, Body } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { months, weeks } from './database/timeTransformation';
import { EmailService, EmailDB_DTO } from './database/email.service';

@Controller()
export class AppController {
  constructor(
    private emailService: EmailService,
    @InjectModel('Email') private emailModel: Model<EmailDB_DTO>,
  ) {}

  @Post('api')
  async create(@Body() createEmailDto: EmailDto): Promise<EmailDB_DTO> {
    return this.emailService.create(createEmailDto);
  }
  @Get('api')
  async findAll(): Promise<EmailDB_DTO[]> {
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
