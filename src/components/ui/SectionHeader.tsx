interface SectionHeaderProps {
  label: string;
  heading: string;
  em?: string;
  sub?: string;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeader({ label, heading, em, sub, center = false, dark = false }: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-[580px] ${center ? "" : ""}`}>
      <span className="section-label" style={dark ? { color: "#e8b86d" } : {}}>
        {label}
      </span>
      <h2
        className={`font-serif font-bold leading-[1.2] mb-4 ${dark ? "text-white" : "text-navy"}`}
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
      >
        {heading}
        {em && (
          <>
            <br />
            <em className={`not-italic ${dark ? "text-gold-light" : "text-gold"}`}>{em}</em>
          </>
        )}
      </h2>
      {sub && (
        <p className={`text-[1rem] leading-[1.75] ${dark ? "text-white/60" : "text-gray-600"}`}>{sub}</p>
      )}
    </div>
  );
}
