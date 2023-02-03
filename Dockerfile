FROM denoland/deno:1.30.1 as base

WORKDIR /opt/app

FROM base as development

RUN apt update && apt install git curl -y

FROM base as build

COPY . .

RUN deno task build

FROM scratch as out

COPY --from=build /opt/app/dist .

FROM debian:stretch as production

COPY --from=build /opt/app/dist .

EXPOSE 8000

CMD ["./app"]