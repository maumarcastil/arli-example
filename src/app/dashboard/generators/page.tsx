'use client';

import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { cn } from '@/features/ui/utils';
import {
  Button,
  Typography,
} from '@/features/ui/utils/materialTailwindExports';

import {
  GeneratorTable,
  CreateGeneratorForm,
  EditGeneratorForm,
} from '@/features/generator/components';
import { GeneratorDocument } from '@/features/generator/models/generator';

const GeneratorPage = () => {
  const [isOpenCreateDrawer, setIsOpenCreateDrawer] = React.useState(false);
  const [isOpenEditDrawer, setIsOpenEditDrawer] = React.useState(false);

  const [selectedGenerator, setSelectedGenerator] =
    React.useState<GeneratorDocument | null>(null);

  const handleOpenCreateGenerator = () => {
    setIsOpenCreateDrawer(true);
  };
  const handleCloseCreateGenerator = () => {
    setIsOpenCreateDrawer(false);
  };

  const handleCloseEditGenerator = () => {
    setIsOpenEditDrawer(false);
  };

  const handlePressEditGenerator = (generator: GeneratorDocument) => {
    setSelectedGenerator(generator);
    setIsOpenEditDrawer(true);
  };

  return (
    <>
      <div className={cn(`flex flex-col gap-6`)}>
        <div className={cn(`flex items-center justify-between`)}>
          <Typography variant="h2" className={cn('text-3xl font-medium')}>
            Generadores
          </Typography>
          <Button
            variant="filled"
            onClick={handleOpenCreateGenerator}
            className={cn(
              'flex items-center gap-1 rounded-2xl bg-[--bgSoft] text-inherit',
            )}
          >
            <FiPlus />
            Crear
          </Button>
        </div>
        <div className={cn(`flex h-[1px] w-full bg-gray-200`)} />

        <GeneratorTable onEditGenerator={handlePressEditGenerator} />
      </div>
      <CreateGeneratorForm
        isOpenDrawer={isOpenCreateDrawer}
        onCloseDrawer={handleCloseCreateGenerator}
      />
      <EditGeneratorForm
        isOpenDrawer={isOpenEditDrawer}
        onCloseDrawer={handleCloseEditGenerator}
        selectedGenerator={selectedGenerator}
      />
    </>
  );
};

export default GeneratorPage;
