import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trafic Tramway Montpellier",
    short_name: "Trafic Tramway Montpellier",
    description: "État trafic tramway Montpellier",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF",
    theme_color: "#FFF",
  };
}
