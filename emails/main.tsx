import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function VercelInviteUserEmail({
}: EmailProps) {
  const previewText = ``;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="flex flex-col justify-center items-center">
            <Text className="text-2xl text-center font-semibold">React email test</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae corrupti dicta facilis omnis modi cupiditate molestiae sint natus magnam, voluptas neque delectus dignissimos, rem eveniet incidunt quo quae! Minima?</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
