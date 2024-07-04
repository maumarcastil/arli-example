'use client ';

import React from 'react';
import { FiEdit } from 'react-icons/fi';

import {
  Card,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';

import { cn } from '@/features/ui/utils';

import {
  TABLE_HEAD,
  TABLE_ROWS,
} from '@/features/generator/mocks/generatorMockData';
import { GeneratorDocument } from '@/features/generator/models/generator';

interface GeneratorTableProps {
  onEditGenerator: (generator: GeneratorDocument) => void;
}

export const GeneratorTable = (props: GeneratorTableProps) => {
  const { onEditGenerator } = props;

  return (
    <>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b p-4">
                  <Typography
                    variant="small"
                    color="inherit"
                    className="font-semibold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...TABLE_ROWS, ...TABLE_ROWS].map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={`${index}${item.id}`}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.comercialName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Editar generator">
                      <IconButton
                        variant="text"
                        onClick={() => onEditGenerator(item)}
                        className={cn('transition-all active:bg-[--bgSoft]')}
                      >
                        <FiEdit className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};
