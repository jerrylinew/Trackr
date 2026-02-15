import { useSearchParams } from 'react-router-dom';
import { IDGmail } from '../services/database';
import { useState } from 'react';
export default function Items() {
  const [itemlist, setItemlist] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');
  const sort = searchParams.get('sort') ?? 'relevance';
  const email = searchParams.get('id');

  // Update parameters
  function updateSort(sortValue) {
    const next = new URLSearchParams(searchParams);
    next.set('sort', sortValue);
    setSearchParams(next);
  }
  async function getTheItems(){
    setItemlist(await IDGmail(email));
  }
  if(email != "" && itemlist.length == 0){
    getTheItems();
  }
  console.log(itemlist);

  

  return (
    <>
      <h1>Nice items {itemlist[0]}</h1>
      <p></p>
    </>
  );
}
