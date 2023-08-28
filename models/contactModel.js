const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: [true, "Please add the contact Name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact Email address"],
    },
    phone: {
      type: Number,
      required: [true, "Please add the contact Phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
