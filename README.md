# BabIoTFoot

## Choix de l'infrastructure

Pour cette partie du projet, nous avons : 

- API Gateway en Websocket afin d'obtenir l'affichage en temps réel des matchs.
- Une table DynamoDB afin de stocker les IDs de connection venant de l'interface.

## Variables

Pour démarrer ce projet, il faudra un .env file avec

```
WEBSOCKET_URL
```

L'URL de l'API Gateway déployée grâce au template.yaml situé dans le dossier `infrastructure`

## Démarrer le projet

```bash
# install dependencies from package-lock.json
$ npm ci

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Production

Actuellement, l'application est en production avec l'URL :  https://babiotfoot.websmith.world