import 'dotenv/config'
import app from './app.js'

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Servidor funcinando! A página inicial agora tem conteúdo. </h1>')
});
app.listen(port, () => {
    console.log(`✅ Servidor ON em http://localhost:${port}`)
    })
    