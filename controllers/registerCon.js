const User = require("../model/user");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
    const { name, email, password, age, gender, city } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user1 = await User.create({ name, email, password: hashedPassword, age, gender, city });
    const result = await User.findById(user1._id);
    res.status(201).json({ message: "User created successfully", data: result });
}