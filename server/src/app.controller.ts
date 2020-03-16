import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'hi';
  }
  @Post()
  postTest(@Body() dto: PostDto): PostDto {
    return dto;
  }
}

interface PostDto {
  content: string;
  send: Date | undefined;
}
