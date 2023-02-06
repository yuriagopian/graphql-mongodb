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

  async createLesson(name, startDate, endDate) {
    const id = uuid();
    const lesson = this.lessonRepository.create({
      id,
      name,
      endDate,
      startDate,
    });

    await this.lessonRepository.save(lesson);

    return lesson;
  }
}
