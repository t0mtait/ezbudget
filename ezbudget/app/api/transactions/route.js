import { NextResponse } from "next/server";
import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const now = Date.now();
    const random = Math.floor(Math.random() * 1e6);
    const id = `${now}${random}`;
    const command = new PutItemCommand({
      TableName: "ezbudget-transactions",
      Item: {
        product: { S: body.product },
        store: { S: body.store },
        date: { S: body.date },
        category: { S: body.category },
        cost: { N: String(body.amount) },
        id: { N: id },
      },
    });
    await client.send(command);
    console.log("yippee");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const command = new ScanCommand({
      TableName: "ezbudget-transactions",
    });
    const data = await client.send(command);

    // sort transactions by date
    data.Items.sort((a, b) => new Date(b.date.S) - new Date(a.date.S));

    const transactions = (data.Items || []).map((item) => ({
      id: item.id.N,
      product: item.product.S,
      store: item.store.S,
      amount: item.cost.N,
      category: item.category.S,
      date: item.date.S,
    }));

    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
