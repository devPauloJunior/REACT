import './App.css';

import { useState, useRef } from 'react';

function App() {
  const sides = [ {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10} ];

  const refDiv1 = useRef(null);
  const refDiv2 = useRef(null);
  const refDiv3 = useRef(null);
  const refDiv4 = useRef(null);
  const refDiv5 = useRef(null);
  
  const [ divID, setDivID ] = useState (sides[0].id);
  
  const handleSide = (e) => {
    switch(divID) {
      case 1:
        refDiv1.current.style.borderBottom = '3px solid black';
        setDivID(sides[1].id)
        return;
      case 2:
        refDiv1.current.style.borderRight = '3px solid black';
        setDivID(sides[2].id)
        return;
      case 3:
        refDiv2.current.style.borderBottom = '3px solid black';
        setDivID(sides[3].id)
        return;
      case 4:
        refDiv2.current.style.borderRight = '3px solid black';
        setDivID(sides[4].id)
        return;
      case 5:
        refDiv.current.style.borderBottom = '3px solid black';
        setDivID(sides[5].id)
        return;
      case 6:
        refDiv3.current.style.borderRight = '3px solid black';
        setDivID(sides[6].id)
        return;
      case 7:
        refDiv4.current.style.borderBottom = '3px solid black';
        setDivID(sides[7].id)
        return;
      case 8:
        refDiv4.current.style.borderRight = '3px solid black';
        setDivID(sides[8].id)
        return;
      case 9:
        refDiv5.current.style.borderBottom = '3px solid black';
        setDivID(sides[9].id)
        return;
      case 10:
        refDiv5.current.style.borderRight = '3px solid black';
        return;

    }
  }
  
  return (
    <div>
      <button onClick={ handleSide }>Add Degrau</button>
      <section className='container'>
        <div>1</div><div>2</div><div>3</div><div>4</div><div ref={refDiv5}>5</div>
        <div>11</div><div>12</div><div>13</div><div ref={refDiv4}>14</div><div>15</div>
        <div>21</div><div>22</div><div ref={refDiv3}>23</div><div>24</div><div>25</div>
        <div>31</div><div ref={refDiv2}>32</div><div>33</div><div>34</div><div>35</div>
        <div ref={refDiv1}>41</div><div>42</div><div>43</div><div>44</div><div>45</div>
      </section>
    </div>
  );
}

export default App;
