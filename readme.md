mysql 的配置文件为 my.ini
1.启动数据库

cd D:\program\mysql\mysql\bin

初始化数据库：
mysqld --initialize --config

初始化data目录：
mysqld --initialize -insecure


得到root用户的默认密码：
123456

输入安装命令：
mysqld install

启动输入以下命令即可：
net start mysql


mysql -h 主机名 -u 用户名 -p

mysql -u root -p

Enter password:

mysqladmin -uroot -p123456 password 123
