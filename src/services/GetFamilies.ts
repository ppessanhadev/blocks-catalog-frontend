import axios from 'axios';
import { Family } from '@/types/Family';

export async function getFamilies(skip = 0) {
  const { data: families } = await axios.get<Family[]>('https://test-candidaturas-front-end.onrender.com/families', {
    params: { take: 50, skip },
    timeout: 30000,
  });

  return families;
}
