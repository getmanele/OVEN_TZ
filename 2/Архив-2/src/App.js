// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getData } from "./scripts"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
    console.log("render")
  }, []);

  return (
    <div className="App">
      {data.map((el) => (
        <tr key={el.name} className="product-prices__row">
            <td className="product-prices__cell">{el.name}
              <div className="pricelist-line-description">{el.descr || "-"}</div>
            </td>
            
            <td className="product-prices__cell product-prices__cell_type_price">{el.price}0₽</td>
            <td className="product-prices__cell">
              <div className="product-prices__button">ЗАКАЗАТЬ</div>
            </td>
        </tr>
      ))}
    </div>
  );
}

export default App;

// {/* <div className="cell">{el.name}</div>
//           <div className="cell">{el.full_name}</div>
//           <div className="cell">{el.mod}</div>
//           <div className="cell">{el.price}</div>
//           <div className="cell">{el.descr || "-"}</div> */}