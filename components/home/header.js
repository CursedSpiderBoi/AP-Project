import UserControls from './UserControls';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Cognify</h1>
      <UserControls />
    </header>
  );
}