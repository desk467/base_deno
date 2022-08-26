FROM denoland/deno:1.22.1 as base

WORKDIR /opt/app

COPY deno.json .

COPY lock.json .

COPY src/deps.ts src/deps.ts

COPY import_map.json .

RUN deno task setup

FROM base as build

COPY . .

RUN deno task build

FROM debian:stretch as production

COPY --from=build /opt/app/dist .

EXPOSE 8000

CMD ["./app"]