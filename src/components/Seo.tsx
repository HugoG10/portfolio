import { useEffect } from "react";
import { profile } from "../data/profile";

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function Seo({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  useEffect(() => {
    const url = `${profile.siteUrl.replace(/\/$/, "")}${path === "/" ? "/" : path}`;
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", url);
  }, [title, description, path]);

  return null;
}
