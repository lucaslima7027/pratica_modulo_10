import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Painel from "./pages/tarefa/Painel"

function App() {
  return (
    <div className="App">
      <Header />
      <Painel />
      <ListarTarefa />
    </div>
  );
}

export default App;
