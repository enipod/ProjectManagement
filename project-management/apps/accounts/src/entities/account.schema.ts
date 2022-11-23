import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import datetime from '../../../../libs/getCurrentDate';

@Entity()
export class Account {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({
    name: 'first_name',
    type: String,
    nullable: false,
  })
  first_name!: string;

  @Column({
    name: 'last_name',
    type: String,
    nullable: false,
  })
  last_name!: string;

  @Column({
    name: 'email',
    type: String,
    nullable: false,
  })
  email!: string;

  @Column({
    name: 'type',
    type: String,
    enum: {
      MANAGER: 'MANAGER',
      CREATOR: 'CREATOR',
    },
    default: 'CREATOR',
  })
  type!: 'CREATOR' | 'MANAGER';

  @Column({
    name: 'projects',
    nullable: false,
    default: [],
  })
  projects!: Array<ObjectId>;

  @Column({
    name: 'date',
    type: String,
    nullable: false,
  })
  date!: string;

  constructor(
    first_name: string,
    last_name: string,
    email: string,
    type: 'CREATOR' | 'MANAGER' = 'CREATOR',
    date: string = datetime,
    projects: Array<ObjectId> = []
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.type = type;
    this.date = date;
    this.projects = projects;
  }
}
