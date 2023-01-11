const Airtable = require('airtable')
// conexion con la base de datos
const db = new Airtable({
  apiKey: process.env.AIRTABLE_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID)

const headers = {
    /* Required for CORS support to work */
    "Access-Control-Allow-Origin": "*",
    /* Required for cookies, authorization headers with HTTPS */
    "Access-Control-Allow-Credentials": true,
    /* Para visualizar mejor el texto en JSON */
    "content-type": "application/json",
  };

exports.handler = async function (evt) {
    // espero a que se conecte y luego consulto por todos los articulos
  const articles = await db('articles').select().all()

  return { // devuelvmo los articulos
    statusCode: 200,
    headers,
    body: JSON.stringify({
      articles,
    }),
  }
}