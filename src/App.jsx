import Header from './components/Header';
import Announcements from './components/Announcements';
import Activities from './components/Activities';
import DailyDevotion from './components/DailyDevotion';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Announcements />
        <Activities />
        <DailyDevotion />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} COOL Sabtu Online. All rights reserved.</p>
          <p className="text-sm text-gray-500">“Let everything that has breath praise the Lord.” — Psalm 150:6</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
