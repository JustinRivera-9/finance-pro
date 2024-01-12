import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "focus:bg-yellow-300 text-sm focus:ring-offset-2 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3 ",
    small: base + " text-xs px-4 py-2 md:px-5 md:py-2.5",
    round: base + " text-md mx-2 px-2.5 py-1 md:px-3.5 md:py-2",
    secondary:
      "md:px-6 md:py-3.5 px-4 py-3 focus:bg-yellow-300 focus:ring-offset-2 inline-block rounded-full border-2 border-stone-300 px-4 py-2.5 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 focus:outline-none focus:ring focus:bg-stone-100 focus:ring-red-200 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4 hover:border-red-400 hover:text-red-400 hover:bg-stone-100",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
