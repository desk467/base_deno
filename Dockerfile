FROM denoland/deno:1.44.2 as base

RUN apt update && apt install git curl unzip -y

WORKDIR /opt/app

FROM base as build

COPY . .

RUN --mount=type=cache,target=${DENO_DIR} deno task build

FROM scratch as out

COPY --from=build /opt/app/dist .

FROM ubuntu:latest as production

WORKDIR /opt/app

COPY --from=build /opt/app/dist .

EXPOSE 8000

CMD ["./app"]
