import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/index';

const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(8000, () => {
  // console.log('Server Connected !!!');
});
