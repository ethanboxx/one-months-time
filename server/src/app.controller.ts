import { Controller, Get, Post, Body } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailService, EmailDBDTO } from './database/email.service';

@Controller()
export class AppController {
  constructor(
    private emailService: EmailService,
    @InjectModel('Email') private emailModel: Model<EmailDBDTO>,
  ) {}

  @Post('api')
  async create(@Body() createEmailDto: EmailDto): Promise<EmailDBDTO> {
    return this.emailService.create(createEmailDto);
  }
  @Get('api')
  async findAll(): Promise<EmailDBDTO[]> {
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
