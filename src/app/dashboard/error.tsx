'use client';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function error({
 error,
 reset,
}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
 const router = useRouter();
 const reload = () => {
  startTransition(() => {
   router.refresh();
   reset();
  });
 };
 return (
  <div>
   <button onClick={reload}>{error.message}</button>
  </div>
 );
}
