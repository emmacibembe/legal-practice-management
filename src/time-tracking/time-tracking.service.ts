import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TimeTrackingService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.timeEntry.findMany();
  }
  

  async findById(id: number) {
    return this.prisma.timeEntry.findUnique({
      where: { id },
    });
  }

  async create(createTimeEntryDto: any) {
    return this.prisma.timeEntry.create({
      data: createTimeEntryDto,
    });
  }

  async update(id: number, updateTimeEntryDto: any) {
    return this.prisma.timeEntry.update({
      where: { id },
      data: updateTimeEntryDto,
    });
  }

  async remove(id: number) {
    return this.prisma.timeEntry.delete({
      where: { id },
    });
  }
}


// async create(createTimeEntryDto: CreateTimeEntryDto) {
//     return this.prisma.timeEntry.create({
//       data: createTimeEntryDto,
//     });
//   }
  