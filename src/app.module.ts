import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CasesModule } from './cases/cases.module';
import { UsersModule } from './users/users.module';
import { TimeTrackingModule } from './time-tracking/time-tracking.module';
import { DocumentsModule } from './documents/documents.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),AuthModule, CasesModule, UsersModule, TimeTrackingModule, DocumentsModule,PrismaModule],
})
export class AppModule {}
