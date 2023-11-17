import { createConnection } from 'typeorm';
import { Produtos } from '../entities/Produtos';
const a = [Produtos]

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "senha",
  database: "ecommercedef",
  entities: [...a]
});