import { Controller, Get, Post, Body } from '@nestjs/common';
import { Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, mongo } from 'mongoose';
import { months, weeks } from './timeTransformation';

@Controller()
export class EmailService {
  constructor(@InjectModel('Email') private emailModel: Model<EmailDB_DTO>) {}

  async create(createEmailDto: EmailDto): Promise<EmailDB_DTO> {
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
  async findAll(): Promise<EmailDB_DTO[]> {
    return this.emailModel.find().exec();
  }

  async remove(id: string) {
    console.log({ _id: new mongo.ObjectId(id) });
    this.emailModel.deleteOne({ _id: new mongo.ObjectId(id) }, function (err) {
      console.log(err);
    });
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
export interface EmailDB_DTO extends Document {
  email: string;
  content: string;
  sendAfter: number;
}
