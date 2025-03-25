import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('prisma')
export class PrismaController {
  constructor(private readonly prismaService: PrismaService) {}

  // Example endpoint to fetch all users (could be used for testing)
  @Get('users')
  async getAllUsers() {
    return this.prismaService.user.findMany();
  }

  // Example endpoint to fetch all cases
  @Get('cases')
  async getAllCases() {
    return this.prismaService.case.findMany();
  }
}
