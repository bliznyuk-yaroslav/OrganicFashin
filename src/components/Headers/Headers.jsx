import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import s from "./Headers.module.scss";
export default function Headers() {
  return (
    <nav className={s.headSect}>
      <Logo />
      <Nav />
    </nav>
  );
}
