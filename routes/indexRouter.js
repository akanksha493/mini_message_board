const {Router} = require('express');

const indexRouter = Router();

const indexController = require('../controllers/indexController');



indexRouter.get('/', indexController.getMessages);
indexRouter.get('/new', indexController.getCreateMessageForm);
indexRouter.post('/new', indexController.createMessage);


module.exports = indexRouter;