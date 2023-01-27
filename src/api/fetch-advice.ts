import axios from 'axios';

export interface AdviceResponse {
  slip: {
    id: string;
    advice: string;
  };
}

const fetchAdvice = async () => {
  try {
    const { data } = await axios.get<AdviceResponse>(
      'https://api.adviceslip.com/advice'
    );
    return data;
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message);
    throw new Error('something went wrong');
  }
};

export default fetchAdvice;
