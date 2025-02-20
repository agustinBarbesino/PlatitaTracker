import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
          PlatitaTracker
        </Link>
        <div className=' w-1/3 flex justify-end items-center'>
          <Link href="/finanzas" className="bg-white text-blue-600 mx-2 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
            Finanzas
          </Link>
          <Link href="/signUp" className="bg-white text-blue-600 mx-2 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
            SignUp
          </Link>
        </div>
      </div>
    </header>
  );
}