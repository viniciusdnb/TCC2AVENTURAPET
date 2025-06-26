# Usando uma imagem base oficial do Ubuntu
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Instalando o MySQL Server
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server

# Expondo a porta padrão do MySQL
EXPOSE 3306

# Iniciando o serviço MySQL após o container ser criado (opcional se for usar no postCreateCommand)
CMD ["sleep", "infinity"]