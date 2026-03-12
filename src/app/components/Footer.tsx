import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="text-sm text-gray-400">
            © 2026 D Innovate Group. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}
