import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

import { ProjectSpace } from './project-space.schema';
import datetime from '../../../../libs/getCurrentDate';

@Entity()
export class Project {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({
    name: 'name',
    type: String,
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'description',
    type: String,
    nullable: false,
  })
  description!: string;

  @Column({
    name: 'ownerId',
    type: String,
    nullable: false,
  })
  ownerId!: ObjectId;

  @Column({
    name: 'status',
    type: String,
    enum: {
      IN_PROGRESS: 'IN_PROGRESS',
      INITIALIZED: 'INITIALIZED',
      COMPLETED: 'COMPLETED',
    },
    default: 'INITIALIZED',
  })
  status!: 'IN_PROGRESS' | 'INITIALIZED' | 'COMPLETED';

  @Column({
    name: 'assets',
    nullable: false,
    default: [],
  })
  assets!: Array<string>;

  @Column({
    name: 'participants',
    nullable: false,
    default: [],
  })
  participants: Array<ObjectId>;

  @Column({
    name: 'payments',
    nullable: false,
  })
  payments: Array<ObjectId>;

  @Column({
    name: 'date',
    type: String,
    nullable: false,
  })
  date!: string;

  @Column(() => ProjectSpace)
  spaces!: Array<ProjectSpace>;

  constructor(
    name: string,
    description: string,
    ownerId: ObjectId,
    assets: Array<string> = [],
    participants: Array<ObjectId> = [ownerId],
    payments: Array<ObjectId> = [],
    spaces: Array<ProjectSpace> = [new ProjectSpace(ownerId)],
    date: string = datetime
  ) {
    this.name = name;
    this.description = description;
    this.ownerId = ownerId;
    this.assets = assets;
    this.participants = participants;
    this.payments = payments;
    this.spaces = spaces;
    this.date = date;
  }
}
