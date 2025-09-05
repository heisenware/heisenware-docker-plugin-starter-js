# heisenware-docker-extension-starter-js

Use this as template to have a immediately working docker-based extension project structure.

## Adding custom code

You must add your class in the `src` directory and register it in the
`index.js`. Use the `Greeter.js` class as a reference.

It is possible to register not only one, but any number of classes.

## Building the extension

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

## Running the extension

There are two options of running the extension:

### Start within the platform (running in cloud)

Once your image is publicly available you can start is as part of
your cloud platform.

In the App Builder functionality panel click the `Install Extensions` icon, select
`Custom Extension` and provide the full path to your image (e.g.
`myusername/myimage:1.0.0`).

### Start locally (running on premises)

You can also start the container locally, that way you can run code that for
example connects to on-premises servers / machines.

To do that simply run the container using standard Docker technology and provide
the required credentials via environmental variables:

```bash
docker run -it \
-e HW_DOMAIN=<account>.<workspace> \
-e HW_BROKER=mqtts:\\<account>.heisenware.cloud \
-e HW_USERNAME=<username> \
-e HW_PASSWORD=<password> \
myusername\myimage:1.0.0
```

In order to retrieve a valid username and password, create a `VRPC` integration
in the App Manager.

*Example*

For an account named `my-company`, an integration with username `agentRunner`
and a password called `secret` the call would be:

```bash
docker run -it \
-e HW_DOMAIN=my-company.default \
-e HW_BROKER=mqtts:\\my-company.heisenware.cloud \
-e HW_USERNAME=agentRunner \
-e HW_PASSWORD=secret \
myusername\myimage:1.0.0
```
