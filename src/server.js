import express from 'express';
import webpack from 'webpack';
import webpackDevMiddlewre from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// initializing packages
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(webpackDevMiddlewre(webpack(webpackConfig)));

// ESTOY AQUI!!!
// 30:45

// routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
  res.json({
    api: 'Works!'
  });
});

// start the server
app.listen(app.get('port'), () => {
  console.log('Server on port:', app.get('port'));
});