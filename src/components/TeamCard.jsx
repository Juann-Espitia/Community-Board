// A single card on the community board.
// It receives all of its data through props (passed down from App).
function TeamCard({ team }) {
  const { name, abbr, city, conference, division, arena, founded, championships, colors } = team

  return (
    <article className="card" style={{ '--c1': colors[0], '--c2': colors[1] }}>
      <header className="card-header">
        <span className="card-badge">{abbr}</span>
        <span className={`card-conf ${conference.toLowerCase()}`}>{conference}</span>
      </header>

      <h2 className="card-title">{name}</h2>
      <p className="card-city">📍 {city}</p>

      <ul className="card-info">
        <li>
          <span className="label">Arena</span>
          <span className="value">{arena}</span>
        </li>
        <li>
          <span className="label">Division</span>
          <span className="value">{division}</span>
        </li>
        <li>
          <span className="label">Founded</span>
          <span className="value">{founded}</span>
        </li>
        <li>
          <span className="label">Championships</span>
          <span className="value">🏆 {championships}</span>
        </li>
      </ul>
    </article>
  )
}

export default TeamCard
