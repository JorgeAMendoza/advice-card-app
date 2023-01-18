import './App.css';
import fetchAdvice, { AdviceResponse } from './api/fetch-advice';
import AdviceCard from './components/AdviceCard';
import useSWR from 'swr';

function App() {
  const { data, error, isLoading } = useSWR<AdviceResponse, Error>(
    'advice',
    fetchAdvice
  );
  return (
    <main>
      {/* advice card container */}
      {data && <p>{data.slip.advice}</p>}
      <div>
        <AdviceCard />
        <AdviceCard />
      </div>
    </main>
  );
}

export default App;
