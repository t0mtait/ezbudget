import { NextResponse } from "next/server";
import {
  DynamoDBClient,
  DeleteItemCommand,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    
    const command = new DeleteItemCommand({
      TableName: "ezbudget-transactions",
      Key: {
        id: { N: id },
      },
    });
    
    await client.send(command);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
