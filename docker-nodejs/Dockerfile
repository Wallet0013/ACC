FROM    centos:6

RUN		yum -y install epel-release
RUN		yum -y install nodejs npm --enablerepo=epel
RUN		yum -y install git

RUN		git clone --progress -v https://github.com/creationix/nvm.git ~/.nvm

RUN 	. ~/.nvm/nvm.sh && nvm install 4.4.7 && nvm alias default 4.4.7
ENV     PATH /root/.nvm/versions/node/v4.4.7/bin:$PATH
RUN		echo $PATH

RUN		node -v