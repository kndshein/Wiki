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

6.  Create `.gitignore` and `.env` files in root folder. In `.gitignore`

    ```
    node_modules
    .env
    ```

7.  Add a default route:

    ```
    app.get("/", (req, res) => {
        res.json({
            status: 200,
            message: "Route successful",
        });
    });
    ```

8.  At this point, `server.js` should look like this:

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

    // Routers
    app.get("/", (req, res) => {
        res.json({
            status: 200,
            message: "Route successful",
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

#### Connection

1. `npm i mongoose`
2. Create folder named `db` in root folder and create a `connection.js` file
3. Add code below:

   ```
   require("dotenv").config();

   const mongoose = require("mongoose");
   const DB = mongoose.connection;
   const { MONGODBURI } = process.env;
   const config = { useUnifiedTopology: true, useNewUrlParser: true };

   mongoose.connect(MONGODBURI, config);

   DB.on("open", () => console.log("You are connected to Mongo"))
   .on("close", () => console.log("You are disconnected to Mongo"))
   .on("error", (err) => console.log(err));

   module.exports = mongoose;
   ```

4. In `.env` file:

   ```
    MONGODBURI=<insertMongoDBConnectionhere>
    mongodb+srv://<username>:<password>@cluster0.u1tmv.mongodb.net/<databasename>?retryWrites=true&w=majority
   ```

#### Model and Seeding

1. Create `models` folder in root folder

2. Create `<filename>.js`
3. In created file, import and export the model schema:

   ```
   const mongoose = require("../db/connection");
   const Schema = mongoose.Schema;

   // Model Schema goes here

   const ItemModel = mongoose.model("Item", itemSchema);
   module.exports = ItemModel;
   ```

4. Example model schema:

   ```
    const mongoose = require("../db/connection");
    const Schema = mongoose.Schema;

    const itemSchema = new Schema({
        name: String,
        type: String,
        quantity: Number,
        loggedDate: Date,
        obtainedDate: Date,
        lastCheckedDate: Date,
    });

    const ItemModel = mongoose.model("Item", itemSchema);
    module.exports = ItemModel;
   ```

#### Controller and Routes

1. Create `controllers` folder in root folder
2. Create `<filename>.js`
3. In created file, import and export the model schema:

   ```
   const express = require("express");
   const router = express.Router();

   // Controller goes here

   module.exports = router;
   ```

4. Example controller:

   ```
   const express = require("express");
    const router = express.Router();

    const Item = require("../models/item.js");

    router.get("/", async (req, res) => {
        Item.find({})
            .then((allItems) => {
            res.json(allItems);
            })
            .catch((err) => res.json({ status: 400, err: err }));
    });

    module.exports = router;
   ```

5. In `index.js` import the controller

   ```
   const <routerName> = require("<path to controller>");
   app.use("/<slug>", <routerName>);
   ```

6. Example `index.js`:

   ```
   require("dotenv").config();

   const express = require("express");
   const cors = require("cors");
   const app = express();
   const PORT = process.env.PORT || 4000;
   const itemRouter = require("./controllers/itemController");

   // Middleware
   app.use(cors());
   app.use(express.urlencoded({ extended: false }));
   app.use(express.json());

   // Routers
   app.get("/", (req, res) => {
       res.json({
           status: 200,
           message: "Route sucessful",
       });
   });
   app.use("/item", itemRouter);

   app.listen(PORT, () => console.log(`Server is up and running on: ${PORT}`));

   ```
