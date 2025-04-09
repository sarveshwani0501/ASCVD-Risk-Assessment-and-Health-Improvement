const bcrypt = require("bcryptjs");

const enteredPassword = "9699";
const storedHash =
  "$2b$10$3bA6MePn.5JRuP0G8Ki9A.pGslri6zLtMCQS8FagJF9YFAZJPO4te";

bcrypt.compare(enteredPassword, storedHash, (err, result) => {
  if (err) console.error("Error:", err);
  console.log("Manual bcrypt test result:", result);
});
