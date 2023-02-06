import { Entity } from 'typeorm';

@Entity()
export class Lesson {
  id: string;

  name: string;

  startDate: string;

  endDate: string;
}
