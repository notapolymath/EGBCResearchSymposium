import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Academy } from "./pages/Academy";
import { Learning } from "./pages/Learning";
import { Educators } from "./pages/Educators";
import { Competition } from "./pages/Competition";
import { Genomics } from "./pages/Genomics";
import { Bioinformatics } from "./pages/Bioinformatics";
import { SyntheticBio } from "./pages/SyntheticBio";
import { Repositories } from "./pages/Repositories";
import { MentorProgram } from "./pages/MentorProgram";
import { Archives } from "./pages/Archives";
import { SearchResults } from "./pages/SearchResults";
import { FAQ } from "./pages/FAQ";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
    <h1 className="font-serif text-9xl font-bold text-exeter-red italic mb-8">404</h1>
    <h2 className="font-serif text-4xl font-bold text-exeter-dark mb-4 uppercase tracking-tighter">Page Not Found</h2>
    <p className="text-gray-500 max-w-md mx-auto mb-10">The academic resource you are looking for has been moved or does not exist within our current archives.</p>
    <a href="/" className="px-10 py-4 bg-exeter-dark text-white font-bold uppercase tracking-widest text-[11px] hover:bg-exeter-red transition-all">Return to Home</a>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="academy" element={<Academy />} />
          <Route path="learning" element={<Learning />} />
          <Route path="educators" element={<Educators />} />
          <Route path="competition" element={<Competition />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="disciplines">
            <Route path="genomics" element={<Genomics />} />
            <Route path="bioinformatics" element={<Bioinformatics />} />
            <Route path="synthetic-bio" element={<SyntheticBio />} />
            <Route path="repositories" element={<Repositories />} />
            <Route path="mentor-program" element={<MentorProgram />} />
            <Route path="archives" element={<Archives />} />
          </Route>
          <Route path="search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
