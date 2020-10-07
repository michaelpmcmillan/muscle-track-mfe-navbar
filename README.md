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

## See

- https://www.netlify.com/blog/2017/10/30/how-to-add-netlify-identity-service-to-react-projects/
- https://github.com/open-sauced/open-sauced/blob/10ee3618769c3f54d26134d39569d5897a8319c9/src/App.js
- https://www.netlify.com/blog/2019/02/21/the-role-of-roles-and-how-to-set-them-in-netlify-identity/
