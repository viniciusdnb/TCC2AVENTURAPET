FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Instala Node.js (exemplo com Node 18)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs

# Instala MySQL
RUN apt-get install -y mysql-server

# Expondo a porta do MySQL
EXPOSE 3306

CMD ["sleep", "infinity"]