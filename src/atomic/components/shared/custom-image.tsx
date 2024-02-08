import { cn } from '@/lib/utils';
import React from 'react';

export default function CustomImage({
 className,
 src,
 alt,
 width,
 height,
 title,
}: React.ComponentProps<'img'>) {
 return (
  <CustomImage
   className={cn('h-auto w-full object-contain', className)}
   src={String(src)}
   alt={String(alt)}
   width={Number(width)}
   height={Number(height)}
   title={title}
  />
 );
}
