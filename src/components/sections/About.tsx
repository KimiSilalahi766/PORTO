// components/sections/About.tsx (contoh nama file)
export default function About() {
  return (
    <section className="card-glass rounded-3xl shadow-xl-soft max-w-screen-lg mx-auto my-6">
      <div className="card-body">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Identitas & Kontribusi</h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed">
          Software Engineer fokus Data/AI. Mengembangkan analitik, visualisasi, dan UI modern.
        </p>

        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">Education</h3>
        <p className="mt-1 text-sm sm:text-base">Universitas Sumatera Utara</p>
        <p className="text-sm sm:text-base">Bachelor of Computer Science</p>
        <p className="text-sm sm:text-base">July 2021 – July 2025 — GPA 3.78/4.00</p>

        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">Contacts</h3>

        {/* GRID: label auto, kolom isi minmax(0,1fr) supaya bisa wrap */}
        <dl className="mt-2 grid grid-cols-1 sm:grid-cols-[auto,minmax(0,1fr)] gap-x-3 gap-y-2 text-sm sm:text-base">
          <dt className="text-slate-400">Phone</dt>
          <dd>
            <a className="underline" href="tel:+6281246894985">+62 812-4689-4985</a>
          </dd>

          <dt className="text-slate-400">Email</dt>
          <dd>
            <a className="underline" href="mailto:kimsilalahi@gmail.com">kimsilalahi@gmail.com</a>
          </dd>
        </dl>
      </div>
    </section>
  );
}
