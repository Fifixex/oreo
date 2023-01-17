import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use('/', routes);

app.listen(4000, () => console.log('Server ready!'));