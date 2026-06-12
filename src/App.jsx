import TeamCard from './components/TeamCard'
import teams from './data/teams'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="board-header">
        <h1>🏀 NBA Team Board</h1>
        <p>Your courtside guide to {teams.length} of the league's franchises</p>
      </header>

      <main className="board-grid">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </main>

      <footer className="board-footer">
        <p>Built with React + Vite · CodePath Unit 1 Project 1</p>
      </footer>
    </div>
  )
}

export default App
