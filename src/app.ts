import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3000);

app.use('/', routes);

export default app;