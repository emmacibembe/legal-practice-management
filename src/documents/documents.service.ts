import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async createDocument(data: { fileName: string; url: string; caseId: number }) {
    return this.prisma.document.create({
      data,
    });
  }

  async getDocument(id: number) {
    const document = await this.prisma.document.findUnique({
      where: { id },
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return document;
  }

  async getDocumentsByCase(caseId: number) {
    return this.prisma.document.findMany({
      where: { caseId },
    });
  }

  async updateDocument(id: number, data: { fileName?: string; url?: string }) {
    const document = await this.prisma.document.findUnique({
      where: { id },
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return this.prisma.document.update({
      where: { id },
      data,
    });
  }

  async deleteDocument(id: number) {
    const document = await this.prisma.document.findUnique({
      where: { id },
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return this.prisma.document.delete({
      where: { id },
    });
  }
}
