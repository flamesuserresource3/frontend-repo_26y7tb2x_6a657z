import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/20">
              <span className="text-lg font-bold">CS</span>
            </div>
            <div>
              <p className="text-lg font-semibold leading-tight">COOL Sabtu Online</p>
              <p className="text-xs opacity-90 -mt-0.5">Community of Love • Saturday Fellowship</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo('announcements')} className="hover:text-yellow-200 transition">Announcements</button>
            <button onClick={() => scrollTo('activities')} className="hover:text-yellow-200 transition">Activities</button>
            <button onClick={() => scrollTo('devotion')} className="hover:text-yellow-200 transition">Daily Devotion</button>
          </nav>

          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <button onClick={() => scrollTo('announcements')} className="text-left px-2 py-2 rounded hover:bg-white/10">Announcements</button>
              <button onClick={() => scrollTo('activities')} className="text-left px-2 py-2 rounded hover:bg-white/10">Activities</button>
              <button onClick={() => scrollTo('devotion')} className="text-left px-2 py-2 rounded hover:bg-white/10">Daily Devotion</button>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-14 pt-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Welcome to COOL Sabtu Online</h1>
        <p className="mt-3 max-w-2xl text-white/90">A warm, online community to grow in faith, share testimonies, and stay connected every Saturday.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => scrollTo('announcements')} className="rounded-lg bg-white text-indigo-700 px-4 py-2 font-medium shadow hover:shadow-md transition">See Announcements</button>
          <button onClick={() => scrollTo('devotion')} className="rounded-lg bg-white/15 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-white/20 transition">Share Devotion</button>
        </div>
      </div>
    </header>
  );
}
