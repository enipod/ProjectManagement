import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class ProjectSpace {
  @ObjectIdColumn()
  _id!: ObjectId;

  @Column({
    name: 'name',
    default: 'Space',
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'description',
    default: 'This projects main space.',
    nullable: false,
  })
  description!: string;

  @Column({
    name: 'owner',
    nullable: false,
  })
  owner!: ObjectId;

  @Column({
    name: 'participants',
    default: [],
    nullable: false,
  })
  participants: Array<ObjectId>;

  @Column({
    name: 'assets',
    default: [],
    nullable: false,
  })
  assets!: Array<string>;

  constructor(
    owner: ObjectId,
    assets: Array<string> = [],
    name = 'Space',
    description = 'This projects main space.',
    participants: Array<ObjectId> = [owner]
  ) {
    this._id = new ObjectId();
    this.owner = owner;
    this.name = name;
    this.description = description;
    this.participants = participants;
    this.assets = assets;
  }
}
