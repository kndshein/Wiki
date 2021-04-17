## Creating Express Backend with MongoDB

#### Initial Setup

1.  `npm init`
2.  `npm i express`, `npm i nodemon`, `npm i cors`, and `npm i dotenv`
3.  Create an `index.js` in the root folder
4.  In `index.js`, set up express:

    ```
    require("dotenv").config(); // import to use .env

    const express = require("express"); // import express
    const cors = require("cors"); // import cors
    const app = express();
    const PORT = process.env.PORT || 4000; // automatically use PORT in .env

    app.listen(PORT, () => console.log(`Server is up and running on: ${PORT}`));
    ```

5.  Add Middlewares:

    ```
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    ```

6.  Create `.gitignore` and `.env` files. In `.gitignore`

    ```
    node_modules
    .env
    ```

7.  Add a default route:

    ```
    app.get("/", (req, res) => {
        res.json({
            status: 200,
            message: "Route sucessful",
        });
    });
    ```

8.  At this point, `index.js` should look like this:

    ```
    require("dotenv").config();

    const express = require("express");
    const cors = require("cors");
    const app = express();
    const PORT = process.env.PORT || 4000;

    // Middleware
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Routes
    app.get("/", (req, res) => {
        res.json({
            status: 200,
            message: "Route sucessful",
        });
    });

    app.listen(PORT, () => console.log(`Server is up and running on: ${PORT}`));

    ```

9.  In `package.json` add `"start": "nodemon server.js"` under `scripts`

    ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js" // Add this line
    },
    ```

10. Run `npm start`
11. Visit default route on a browser via `localhost:4000` to test.