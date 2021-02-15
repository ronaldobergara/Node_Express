// controlar as rotas do atendimento
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('você esta na rota atendimento realizando um GET'))


    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você esta na rota de atendimentos e esta realizando um post')
    })
}