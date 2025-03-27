 const express = require("express")
 const router = express.Router()

 const app = express() 
 const porta = 3333

 function mostraMulher(request, response){
    response.json({
        nome: 'Eliza Cavalcanti',
        imagem: 'https://github.com/gustavoguanabara/html-css/blob/master/ajude-a-divulgar/arte000-modelo/modelo-horizontal.png',
        minibio: 'Heroina'

    })

 }

 function   mostrarPorta() {
    console.log("Servidor criado e rodando na porta", porta)
 }

 app.use(router.get('/mulher', mostraMulher))
 app.listen(porta, mostrarPorta)