import { NextResponse } from "next/server";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function GET() {
  try {
    const command = new ScanCommand({
      TableName: "ezbudget-transactions",
    });
    const data = await client.send(command);

    const transactions = (data.Items || []).map((item) => ({
      product: item.product.S,
      store: item.store.S,
      amount: item.cost.N,
      category: item.category.S,
    }));

    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
