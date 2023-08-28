const express = require("express");
const router = express.Router();
const {
  getContact,
  upadateContact,
  deleteContact,
  pushContact,
  getAContact,
} = require("../controller/contact");
const validateToken = require("../middleware/validatedTokenHandler");
 
router.use(validateToken);
router.route("/").get(getContact).post(pushContact);
router.route("/:id").delete(deleteContact).get(getAContact).put(upadateContact);

module.exports = router;
