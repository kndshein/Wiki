## Creating Express Backend with MongoDB

1. `npm init`
2. `npm i express`, `npm i nodemon`, and `npm i dotenv`
3. Create an `index.js` in the root folder
4. In `index.js`:

   ```
   require("dotenv").config();

   const express = require("express");
   const app = express();
   const PORT = process.env.PORT || 4000;

   app.listen(PORT, () => console.log(`Server is up and running on: $  {PORT}`));
   ```

5.
