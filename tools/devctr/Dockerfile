# FROM ubuntu:latest
FROM ubuntu:20.04

ARG MG_SRC_DIR="/magnus"
ARG TINI_VERSION_TAG="v0.18.0"
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
        binutils-dev \
        git \
        curl \
        python3 \
        python3-pip

# We need to install node and npm from source because of this issue with the
# ubuntu repository:
# https://bugs.launchpad.net/ubuntu/+source/nodejs/+bug/1794589
RUN (curl -sL https://deb.nodesource.com/setup_17.x | bash) \
    && apt-get install -y nodejs \
    && npm install -g npm@8.12.1 \
    && rm -rf /var/lib/apt/lists/*

# Add the tini init binary.
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION_TAG}/tini-static-amd64 /sbin/tini
RUN chmod +x /sbin/tini

WORKDIR "$MG_SRC_DIR"
ENTRYPOINT ["/sbin/tini", "--"]