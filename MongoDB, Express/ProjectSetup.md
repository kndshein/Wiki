## Creating Express Backend with MongoDB

1. `npm init`
2. `npm i express`, `npm i nodemon`, `npm i cors`, and `npm i dotenv`
3. Create an `index.js` in the root folder
4. In `index.js`, set up express:

   ```
   require("dotenv").config(); // import to use .env

   const express = require("express"); // import express
   const cors = require("cors"); // import cors
   const app = express();
   const PORT = process.env.PORT || 4000; // automatically use PORT in .env

   app.listen(PORT, () => console.log(`Server is up and running on: ${PORT}`));
   ```

5. Add middlewares:

   ```
   app.use(cors());
   app.use(express.urlencoded({ extended: false }));
   app.use(express.json());
   ```

6. Create `.gitignore` and `.env` files. In `.gitignore`

   ```
   node_modules
   .env
   ```
