import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateTimeEntryDto {
  @IsNotEmpty()
  caseId: number;

  @IsNotEmpty()
  attorneyId: number;

  @IsPositive()
  hours: number;
}
