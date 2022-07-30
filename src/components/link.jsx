export default function Link({ label, extraClasses }) {
  return (
    <a
      href="#"
      className={`text-revire-primary hover:text-black transition-all cursor-pointer ${extraClasses}`}
    >
      {label}
    </a>
  );
}
