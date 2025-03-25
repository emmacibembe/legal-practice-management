import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get(':id')
  getDocument(@Param('id') id: number) {
    return this.documentsService.getDocument(id);
  }

  @Get('/case/:caseId')
  getDocumentsByCase(@Param('caseId') caseId: number) {
    return this.documentsService.getDocumentsByCase(caseId);
  }

  @Post()
  createDocument(@Body() documentData: any, @Request() req) {
    return this.documentsService.createDocument({ ...documentData, uploadedBy: req.user.userId });
  }

  @Patch(':id')
  updateDocument(@Param('id') id: number, @Body() updateData: any) {
    return this.documentsService.updateDocument(id, updateData);
  }

  @Delete(':id')
  deleteDocument(@Param('id') id: number) {
    return this.documentsService.deleteDocument(id);
  }
}
