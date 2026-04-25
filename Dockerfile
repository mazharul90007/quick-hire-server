FROM node:22-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
COPY tsconfig.json ./
COPY prisma.config.ts ./
COPY src ./src
COPY prisma ./prisma
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src ./src
COPY --from=build /app/generated ./generated
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY --from=build /app/prisma.config.ts ./prisma.config.ts
COPY package.json ./

EXPOSE 4000
CMD ["npm", "start"]
