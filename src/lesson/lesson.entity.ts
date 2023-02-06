import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
