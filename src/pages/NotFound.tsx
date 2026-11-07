import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function NotFound() {
  return (
    <div className="wrap py-24">
      <Seo
        title="Page not found | Hugo Guerra-Garcia"
        description="This page is not part of Hugo Guerra-Garcia's portfolio."
        path="/404"
      />
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em] text-ink">This page is not on the site.</h1>
      <p className="mt-4 max-w-xl text-muted">
        The address may be out of date. Projects, the resume, and contact details are on the home page.
      </p>
      <Link to="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </div>
  );
}
