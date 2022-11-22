import { DataSource } from 'typeorm';
import { environment } from '../environments/environment';
const url = `mongodb+srv://${environment.MONGO_USERNAME}:${environment.MONGO_PASSWORD}@${environment.MONGO_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = new DataSource({
  type: 'mongodb',
  url,
  logging: false,
  database: 'ProjectManagement',
  entities: [],
  migrations: [],
  subscribers: [],
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.log(url);
    console.error(`Data Source initialization error`, err);
  });

export default connectDB;
