[![Netlify Status](https://api.netlify.com/api/v1/badges/80bc1970-859f-4dbc-b2e6-4faf2c14f0f2/deploy-status)](https://app.netlify.com/sites/muscle-track-navbar/deploys)

# muscle-track-mfe-navbar

Micro frontend navbar to be used with the main [container](https://github.com/michaelpmcmillan/muscle-track-mfe-container).

## Run in Development

```bash
yarn start:dev
```

## Notes

- Uses react-helmet to inject html headers, such as css cdn links. This keeps the micro-front-end self contained.
- Uses react-bootstrap and the bootstrap cdn.

## How was this app started?

```bash
npm install --global create-single-spa
npx create-single-spa
.
single-spa application / parcel
react
yarn
y (typescript)
michaelpmcmillan
muscle-track-mfe-navbar
```
