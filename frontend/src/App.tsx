import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <ProjectsGrid />
    </div>
  );
}
