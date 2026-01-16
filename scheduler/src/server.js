import { config } from "dotenv";

import app from "./app.js";

config({ quiet: true });

const port = process.env.PORT;

(async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.log("Error starting server", error);
  }
})();
