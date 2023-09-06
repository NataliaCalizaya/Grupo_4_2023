function login(req, res) {
    res.render('./users/login');
  }
  
  function register(req, res) {
    res.render('./users/register');
  }
  module.exports = {
    login,
    register,
  };