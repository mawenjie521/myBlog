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
    HOST: '101.43.248.133'
  }
}

module.exports = config