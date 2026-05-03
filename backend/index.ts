import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // your frontend
  credentials: true
}));

app.use(cookieParser());

// ✅ Home route
app.get("/", (req: Request, res: Response) => {
  res.send("Server running 🚀");
});

// ✅ Signup
app.post("/signup", async (req: Request, res: Response) => {
  console.log("Signup request body:", req.body);
  const name = req.body.name ;
  const password = req.body.password;

   console.log("secreate-key :", process.env.JWT_SECRET_KEY);
  if (!name || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log("Hashed password:", hashedPassword);
    const token = jwt.sign(
      { name },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );
    console.log("Generated token:", token);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // ⚠️ true only in production (HTTPS)
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7
    });

    res.json({
      message: "Signup successful",
      user: { name }
    });

  } catch (err) {
    res.status(500).json({ message: "Error in signup", error: err });
  }
});

// ✅ Login
app.post("/login", async (req: Request, res: Response) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ⚠️ Replace with DB user later
    const fakeUser = {
      name,
      password: await bcrypt.hash(password, 10)
    };

    const isMatch = await bcrypt.compare(password, fakeUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { name },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });

    res.json({ message: "Login successful" });

  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
});

// ✅ Test
app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Hello from test route" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});