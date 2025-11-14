import { createUser , getAllUsers } from "../Models/userModel.js";

export const addUser = (req, res) => {
  const { username, email, password } = req.body;

  createUser(username, email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Insert Failed", error: err });
    }
    return res.json({ message: "User Added Successfully" });
  });
};

export const showUsers = (req, res) => {
  getAllUsers((err, results) => {
    if (err) {
      return res.status(500).json({ message: "Fetch Failed", error: err });
    }
    return res.json(results);
  });
};
