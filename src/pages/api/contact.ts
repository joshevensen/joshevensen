import type { NextApiRequest, NextApiResponse } from "next";
const postmark = require("postmark");

const client = new postmark.ServerClient(process.env.POSTMARK_KEY);

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const data = request.body;
    console.log("request body", data);

    client.sendEmail({
      From: `${data.name} <${data.email}>`,
      To: "email@joshevensen.com",
      Subject: "Contact Submission",
      HtmlBody: data.message,
      TextBody: data.message,
      MessageStream: "outbound",
    });

    response.status(201).json({ message: "Message Sent" });
  } else {
    response.status(200).json({ message: "Nothing Happened" });
  }
}
