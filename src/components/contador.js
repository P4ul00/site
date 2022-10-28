import react, {useState} from 'react';

function Contador(){
const[count, setCount] = useSate(10);

return(
    <div>
<p>Voce clicou {count} vezes</p>
<button onClick={() => setCount(count + 1)}>   
</button>
    </div>
   );
}

export default Contador