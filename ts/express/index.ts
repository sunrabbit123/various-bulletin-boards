import { app } from "./src";

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server is running -> http://localhost:${PORT}`);
});
