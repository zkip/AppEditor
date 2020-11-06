openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout server.key \
    -new \
    -out server.crt \
    -subj /CN=dev.mycompany.com \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat ./openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:dev.mycompany.com')) \
    -sha256 \
    -days 3650