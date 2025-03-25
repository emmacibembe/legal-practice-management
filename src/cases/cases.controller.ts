import { Controller, Get, Post, Query, Body, UsePipes, ValidationPipe, Delete, Param } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create-case.dto';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('title') title?: string,
    @Query('sort') sort?: string
  ) {
    return this.casesService.findAll(Number(page), Number(limit), title, sort);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createCaseDto: CreateCaseDto) {
    return { success: true, message: 'Case created successfully', data: this.casesService.create(createCaseDto) };
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.casesService.remove(id);
  }
}
