import { blackFridayFlag } from '@/app/flags';

export default async function Page() {
  const black_friday = await blackFridayFlag();
  return (
      <div>
        <h1> Welcome to the ConchaYOro App - deploy v4</h1>
        { black_friday ? <button> Promo </button> : <button> Normal </button> }
      </div>
  )
};
