const config = {

  port: 3001,
  /*
    sql user;
    sudo cat /etc/mysql/debian.cnf
  */
  database: {
    DATABASE: 'koa_demo',
    USERNAME: 'root',
    PASSWORD: '123456',
    HOST: 'localhost'
  }
}

module.exports = config