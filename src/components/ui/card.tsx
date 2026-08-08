import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

/**
 * Generated from the shadcn/ui Card component, then themed with Fumadocs
 * semantic tokens so Home remains visually consistent with the rest of the site.
 */
function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'rounded-lg border border-fd-border bg-fd-card text-fd-card-foreground shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn('flex flex-col gap-1.5 p-4 sm:p-5', className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn('text-sm font-semibold leading-none tracking-normal', className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-xs leading-5 text-fd-muted-foreground', className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-action"
      className={cn('absolute top-4 right-4 sm:top-5 sm:right-5', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-content"
      className={cn('p-4 pt-0 sm:p-5 sm:pt-0', className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center p-4 pt-0 sm:p-5 sm:pt-0', className)}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
