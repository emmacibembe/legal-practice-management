import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateCaseDto } from './dto/create-case.dto';

@Injectable()
export class CasesService {
  private readonly logger = new Logger(CasesService.name);
  private cases = [];

  findAll(page = 1, limit = 10, title?: string, sort?: string) {
    let filteredCases = this.cases;
    if (title) {
      filteredCases = filteredCases.filter((c) => c.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (sort === 'asc') {
      filteredCases.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sort === 'desc') {
      filteredCases.sort((a, b) => b.createdAt - a.createdAt);
    }
    return filteredCases.slice((page - 1) * limit, page * limit);
  }

  create(createCaseDto: CreateCaseDto) {
    if (!createCaseDto.title || !createCaseDto.description) {
      throw new BadRequestException('Title and Description are required');
    }
    const newCase = { id: Date.now(), ...createCaseDto, createdAt: new Date() };
    this.cases.push(newCase);
    this.logger.log(`Case created: ${JSON.stringify(newCase)}`);
    return newCase;
  }

  remove(id: number) {
    const index = this.cases.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Case with ID ${id} not found`);
    }
    this.cases.splice(index, 1);
    return { message: `Case ${id} deleted successfully` };
  }
}
