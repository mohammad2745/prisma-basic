## Build a REST API with Prisma and PostgreSQL

### Create a node project

```sh
mkdir my-blog
```

```sh
cd my-blog
```

```sh
npm init
```

<p>Set prisma</p>

```sh
npx prisma init --datasource-provider postgresql
```

<p>When changes in prisma schema</p>

```sh
npx prisma migrate dev --name init
```

<p>Install prisma client</p>

```sh
npm i @prisma/client
```

<p>Regenerate prisma client</p>

```sh
npx prisma generate
```

