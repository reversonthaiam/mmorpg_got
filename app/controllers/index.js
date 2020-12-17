module.exports.index = function(application, req, res){

    res.render('index', {validacao: {}});
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

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.autenticar(dadosForm, req, res);

    


}
