import axios from 'axios';
import { Family } from '@/types/Family';
import { config } from '@/utils/config';

export async function getFamilies(skip = 0) {
  const { data: families } = await axios.get<Family[]>(config.baseUrl.api, {
    params: { take: 50, skip },
    timeout: 60000,
  });

  return families;
}
