import { Megaphone } from 'lucide-react';

const sampleAnnouncements = [
  {
    id: 1,
    title: 'Saturday Fellowship Gathering',
    date: 'Every Saturday, 7:00 PM WIB',
    details: 'Join our weekly COOL Sabtu Online via Zoom. Invite friends and family!'
  },
  {
    id: 2,
    title: 'Prayer Chain',
    date: 'Daily, 6:00 AM - 7:00 AM',
    details: 'Stand together in prayer. Send requests to the coordinators.'
  },
  {
    id: 3,
    title: 'Community Service',
    date: 'This Month',
    details: 'Let’s prepare care packages for those in need. More info during fellowship.'
  }
];

export default function Announcements() {
  return (
    <section id="announcements" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
          <Megaphone className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Announcements</h2>
          <p className="text-sm text-gray-500">Latest updates for COOL Sabtu Online</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sampleAnnouncements.map((a) => (
          <article key={a.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
                <p className="text-sm text-indigo-600 font-medium mt-0.5">{a.date}</p>
              </div>
            </div>
            <p className="mt-3 text-gray-600 leading-relaxed">{a.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
