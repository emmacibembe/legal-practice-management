import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { TimeTrackingService } from './time-tracking.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('time-tracking')
export class TimeTrackingController {
  constructor(private readonly timeTrackingService: TimeTrackingService) {}

  @Get()
  getAllRecords() {
    return this.timeTrackingService.findAll();
  }

  @Get(':id')
  getRecord(@Param('id') id: number) {
    return this.timeTrackingService.findById(id);
  }

  @Post()
  logTime(@Body() timeData: any, @Request() req) {
    return this.timeTrackingService.create({ ...timeData, userId: req.user.userId });
  }

  @Put(':id')
  updateTime(@Param('id') id: number, @Body() updateData: any) {
    return this.timeTrackingService.update(id, updateData);
  }

  @Delete(':id')
  deleteTime(@Param('id') id: number) {
    return this.timeTrackingService.remove(id);
  }
}
