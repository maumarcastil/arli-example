'use client';

import React, { useEffect } from 'react';

import {
  Button,
  Drawer,
  IconButton,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useFormik } from 'formik';

import { cn } from '@/features/ui/utils';

import { Generator } from '@/features/generator/models/generator';

interface CreateGeneratorFormProps {
  isOpenDrawer: boolean;
  onCloseDrawer: () => void;
}

export const CreateGeneratorForm = (props: CreateGeneratorFormProps) => {
  const { isOpenDrawer, onCloseDrawer } = props;

  useEffect(() => {
    if (isOpenDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenDrawer]);

  const formik = useFormik<Generator>({
    initialValues: {
      name: '',
      email: '',
      comercialName: '',
    },
    onSubmit: (values) => {
      console.log('🚀 ~ CreateGeneratorForm ~ values:', values);
    },
  });

  return (
    <>
      <Drawer open={isOpenDrawer} onClose={onCloseDrawer} placement="right">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
            <Typography variant="h5" color="blue-gray">
              Crear Generador
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={onCloseDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <Typography
              variant="small"
              color="gray"
              className="mb-5 font-normal"
            >
              Complete el formulario para crear un nuevo generador. Todos los
              campos son obligatorios.
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-6"
            >
              <Input
                type="text"
                name="name"
                label="Nombre"
                crossOrigin={undefined}
                value={formik.values.name}
                onChange={formik.handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                label="Correo Electrónico"
                crossOrigin={undefined}
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
              <Input
                type="text"
                name="comercialName"
                label="Nombre Comercial"
                crossOrigin={undefined}
                value={formik.values.comercialName}
                onChange={formik.handleChange}
                required
              />
              <Button
                type="submit"
                className={cn('rounded-2xl bg-[--bgSoft] text-inherit')}
              >
                Guardar
              </Button>
            </form>
          </div>
        </div>
      </Drawer>
    </>
  );
};
