import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Executando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
  response.send('API Tech Academy...');
});
