import { useSearchParams } from 'react-router-dom';
import { IDGmail } from '../services/database';
export default function Items() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');
  const sort = searchParams.get('sort') ?? 'relevance';
  const email = searchParams.get('email');

  // Update parameters
  function updateSort(sortValue) {
    const next = new URLSearchParams(searchParams);
    next.set('sort', sortValue);
    setSearchParams(next);
  }
  IDGmail(email)

  

  return (
    <>
      <h1>Nice items {email}</h1>
    </>
  );
}
