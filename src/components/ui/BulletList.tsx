interface BulletListProps { items: string[]; dark?: boolean; }

export default function BulletList({ items, dark = false }: BulletListProps) {
  return (
    <ul className="list-none m-0 p-0 flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`text-sm pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold leading-snug ${dark ? "text-white/60" : "text-gray-600"}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
