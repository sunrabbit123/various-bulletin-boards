import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  tag: string[];

  @CreateDateColumn()
  createAt: Date;
}
