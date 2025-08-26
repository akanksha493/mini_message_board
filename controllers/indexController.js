const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const getMessages = (req, res, next) =>{
    // res.send("getting all messages");
    res.render('index', {messages: messages});
};

const getCreateMessageForm = (req, res, next) =>{
    // res.send("sending create message form");
    res.render('form');
};

const createMessage = (req, res, next) =>{
    console.log(req.body);
    messages.push({text: req.body.message, user: req.body.name, added: new Date()});
    // res.send("creating message...")
    res.redirect('/');
};

module.exports = {
    getMessages,
    getCreateMessageForm,
    createMessage
};