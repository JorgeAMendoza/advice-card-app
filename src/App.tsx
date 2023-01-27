import './App.css';
import fetchAdvice, { AdviceResponse } from './api/fetch-advice';
import AdviceCard from './components/AdviceCard';
import useSWR from 'swr';
import type { AdviceCardContent } from './types/advice-card';
import { useEffect, useState } from 'react';

function App() {
  const [frontCard, setFrontCard] = useState<AdviceCardContent | null>(null);
  const [backCard, setBackCard] = useState<AdviceCardContent | null>(null);
  const [flipToBack, setflipToBack] = useState(true);
  const { data, error, isLoading } = useSWR<AdviceResponse, Error>(
    'advice',
    fetchAdvice
  );

  useEffect(() => {
    if (isLoading) return;
    if (!data) return;

    if (!frontCard || flipToBack) {
      setFrontCard({ adviceId: data.slip.id, adviceText: data.slip.advice });
      setflipToBack(false);
      console.log('showing front');
      return;
    } else {
      setBackCard({ adviceId: data.slip.id, adviceText: data.slip.advice });
      setflipToBack(true);
      return;
    }
  }, [data]);

  return (
    <main>
      {/* advice card container */}
      <div>
        <AdviceCard adviceContent={frontCard} />
        <AdviceCard adviceContent={backCard} />
      </div>
      {error && <p>{error.message}</p>}
    </main>
  );
}

export default App;
