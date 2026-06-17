import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import botanical from "@/assets/botanical-bg.jpg";

export const Route = createFileRoute("/")({
  component: GatePage,
});

function GatePage() {
  useEffect(() => {
    window.location.replace("/invitation");
  }, []);

  return null;
}
