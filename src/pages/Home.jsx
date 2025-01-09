export default function Home() {
  return (
    <div>
      {/* Header Content */}
      <div className="bg-gradient-to-b from-third to-lime-400 flex items-center justify-center h-screen">
        <div className="text-left mr-8">
          <h1 className="text-7xl font-serif text-green-900 leading-tight">
            Praktikum <br /> Pemrograman Web
          </h1>
          <div className="mt-4 border-2 border-green-800 p-4 text-green-800">
            <p className="text-xl">Nama : Ferry Pebriansyah</p>
            <p className="text-xl">NPM : 50422572</p>
            <p className="text-xl">Kelas : 3IA26</p>
          </div>
        </div>
        <div>
          <img src="./public/buku.png" alt="Books with graduation cap" className="max-w-md" />
        </div>
      </div>
    </div>
  );
}
