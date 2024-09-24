#!/bin/bash

# Generate SSL certificates
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=localhost"

echo "SSL certificates generated: key.pem and cert.pem"
