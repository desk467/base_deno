FROM denoland/deno:1.21.0

WORKDIR /opt/app

COPY deno.json .

COPY lock.json .

COPY src/deps.ts src/deps.ts

RUN deno task setup

COPY . .

EXPOSE 8000

CMD ["deno", "task", "start"]