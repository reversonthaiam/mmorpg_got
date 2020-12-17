module.exports.index = function(application, req, res){

    res.render('index');
}

module.exports.autenticar = function(application, req, res){

    var dadosForm = req.body;

    req.assert('usuario', 'usuario nao pode ser vazio').notEmpty();
    req.assert('senha', 'senha nao pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao:erros});
        return;
    }

    res.send('tudo ok para criar a sessao');


}
