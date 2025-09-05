# heisenware-docker-plugin-starter-js

Use this as template to have a immediately working Docker-based plugin project structure.

## Adding custom code

You must add your class in the `src` directory and register it in the
`index.js`. Use the `Greeter.js` class as a reference.

It is possible to register not only one, but any number of classes.

## Building the plugin

1. In the `app` folder run:

```bash
npm install
```

2. Then in the root folder run:

```bash
docker build -t myusername/myimage:1.0.0 .
```

3. Push the image:

```bash
docker push myusername/myimage:1.0.0
```

Done.
