import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Seo } from "../components/Seo";
import { Skills } from "../components/Skills";
import { profile } from "../data/profile";

export function Home() {
  return (
    <>
      <Seo title={profile.pageTitle} description={profile.description} path="/" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
