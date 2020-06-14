# antcmd api

###

Endpoints
```bash
GET /pages
GET /pages/:id
POST /pages
```

### Setup

```bash
yarn && yarn start
```

### Built with
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/)

### Deployment

Production is hosted on [EC2 instance](http://ec2-54-87-171-242.compute-1.amazonaws.com)

### Concerns

To make requests to the server from client, we need to bypass CORS. It's currently solved by making api calls to this address: https://cors-anywhere.herokuapp.com/http://ec2-54-87-171-242.compute-1.amazonaws.com:3000/page
