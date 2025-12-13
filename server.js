const app = require("./app");
const connectDB = require("./config/config");
(
    async () => {
        try {
            await connectDB();
            app.listen(process.env.PORT || 3000);
            console.log("Server is running on port ", process.env.PORT || 3000);
        } catch (error) {
            console.log(error);
        }
    }
)();
