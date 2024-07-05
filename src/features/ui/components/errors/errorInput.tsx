import { FiInfo } from 'react-icons/fi';

import { Typography } from '@/features/ui/utils/materialTailwindExports';

import { cn } from '../../utils';

interface ErrorInputProps {
  error: string | undefined;
}

const ErrorInput = (props: ErrorInputProps) => {
  const { error } = props;

  return (
    <>
      <div
        className={cn(
          'flex items-center gap-1 overflow-hidden text-red-500 transition-all duration-300 ease-out',
          {
            'max-h-10 opacity-100': error,
            'max-h-0 opacity-0': !error,
          },
        )}
      >
        <FiInfo />
        <Typography
          variant="lead"
          className={cn('text-sm font-normal text-red-500')}
        >
          {error}
        </Typography>
      </div>
    </>
  );
};

export default ErrorInput;
