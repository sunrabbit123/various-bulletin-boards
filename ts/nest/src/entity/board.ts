import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@Index(['idx', 'title', 'tag', 'createdAt'])
export class Board {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  tag: string;

  @CreateDateColumn()
  createdAt: Date;
}
