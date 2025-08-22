import { features } from "node:process";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mydatabase");
    const collection = db.collection("products");

    const products = await collection.find({}).toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("mydatabase");
    const collection = db.collection("products");

    const body = await req.json();
    const { name, category, price, description, image, features } = body;

    if (!name || !category || !price || !description || !image || !features) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newProduct = await collection.insertOne({
      name,
      category,
      price,
      description,
      image,
      features,
    });

    return new Response(
      JSON.stringify({ success: true, product: newProduct }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
