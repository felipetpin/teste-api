import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import router from './server/routes/index';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3003;

// Router
app.use(router);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
