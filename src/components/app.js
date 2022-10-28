import Contador from './components/contador'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
    return(
      <div>
 
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Início</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Página 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        
      </Nav>
    
      </div>
  );
}

export default App;