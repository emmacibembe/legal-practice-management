import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Marks this module as global, so it's available throughout the app
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export the PrismaService so it can be used in other modules
})
export class PrismaModule {}
