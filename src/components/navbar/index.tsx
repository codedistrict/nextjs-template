import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            External Link
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
