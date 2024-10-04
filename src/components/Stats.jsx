export default function Stats({stats}) {
  return (
    <div className="stats">
     <Stat number={stats.numberOfWord} label="Words" />
     <Stat number={stats.numberOfCharacters} label="Character" />
     <Stat number={stats.instaCharctersLeft} label="Instagram" />
     <Stat number={stats.facebookCharactersLeft} label="Facebook" />
    </div>
  );
}

function Stat({number, label}) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 ? 'stat__number--limit' : ""}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
