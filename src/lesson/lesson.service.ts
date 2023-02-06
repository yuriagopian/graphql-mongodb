import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ where: { id } });
  }

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const id = uuid();
    const lesson = this.lessonRepository.create({
      id,
      name,
      endDate,
      startDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
