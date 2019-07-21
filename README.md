# Minimal HTTP NodeJS server with NGINX as Reverse Proxy

To run, update `default.conf` with your current machine IP in the `proxy_pass`
configuration, inside the `server` block.

To run the example:

1. Run the NodeJS app

```bash
npm start
```

2. Run the NGINX server with `docker`.

```bash
docker run --name nginx_docker \
  -v $(pwd)/default.conf:/etc/nginx/nginx.conf:ro \
  -p 80:80 nginx
```

You can now access your NodeJS application on port 80.

```bash
curl http://127.0.0.1/
Hello World!
```

