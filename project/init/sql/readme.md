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

2.数据库替换host
 2.1.使用root登录数据库；
 	mysql -u root [-h ip/localhost] -p

 2.2切换到mysql数据库
 	use mysql; 
 	select host from user where user='root';

 2.3修改root的host值；%为通配符，也可以改成具体的IP地址；
 	update user set host = '%' where user ='root';

 2.4Host修改完成后记得执行flush privileges使配置立即生效
	flush privileges;