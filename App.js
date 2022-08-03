import './App.css';
import React from 'react';
import FullName from './profile/component/FullName';
import Profession from './profile/component/Profession';
import Bio from './profile/component/Bio';
import Photo from './EZ.jpg';

function App() {
  let msg = "sup"
   const alertMe=()=> {
     alert(msg)
   }

  return (
    <div className="App">
      <div >
<FullName FullName="Tchikou Ramy" alertMe={alertMe}>
  <div className='imag'>
<img src= {Photo}/>
</div>
</FullName> 
      </div>
      <div>
<Bio Bio="bio"
     Date="17/11/2000"
     Adress="alger"
     Mobile="+213 0796753369"
     Mail="ramytch10@gmail.com"
     Train="au cour de developement."
     >
      </Bio>  
      </div>
      <div>
<Profession Profession="Profession"
Experrience1="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.."
Experrience2="au cour de stage pratique en entreprise pour obtenir TS en base de données"
Experrience3="actuellemet etudiant chez gomycode en fullstack JS"
>
</Profession>
      </div>
    </div>
  );
}



export default App;