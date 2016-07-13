FROM    centos:centos6

RUN		yum -y install epel-release
RUN		yum -y install nodejs npm --enablerepo=epel
RUN		yum -y install git
RUN		git config --global user.name "Wallet1207"
RUN		git config --global user.email "ggxx007@gmail.com"
RUN		mkdir /opt/acc
RUN		cd /opt/acc/
RUN		

