import './App.css'

function App() {
  return (
    <div className="flex flex-col w-full px-20">
      <header className="flex flex-col flex-1 w-full items-center">
        <div className="relative flex w-full h-[100px] flex-row items-center justify-center">
          <p className="flex w-[200px]">perfil</p>
          <p className="absolute right-0 top-0">titulo</p> 
        </div>
        <div>info</div>
      </header>
      <section className="flex flex-grow flex-1">
        otro
      </section>
    </div>
  )
}

export default App
