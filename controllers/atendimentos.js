// controlar as rotas do atendimento

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('você esta na rota atendimento'))
}