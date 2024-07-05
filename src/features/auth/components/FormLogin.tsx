'use client';

import Link from 'next/link';

import { useFormik } from 'formik';

import ErrorInput from '@/features/ui/components/errors/errorInput';

import { cn } from '@/features/ui/utils';
import {
  Button,
  Input,
  Typography,
} from '@/features/ui/utils/materialTailwindExports';

import { formLoginValidationSchema } from '@/features/auth/validations/FormLoginValidation';

export const FormLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: formLoginValidationSchema,
    onSubmit: (values) => {
      console.log('🚀 ~ CreateGeneratorForm ~ values:', values);
    },
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    formik.setFieldError(e.target.name, '');
  };

  return (
    <>
      <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
        <Typography variant="h2" className="text-2xl font-medium">
          Ingresa tus datos para iniciar sesión
        </Typography>

        <div className="h-[1px] w-full bg-[#D7D5DD]" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Typography
              variant="lead"
              className="text-base font-semibold text-[#6B647C]"
            >
              Correo electrónico
            </Typography>
            <Input
              type="text"
              name="email"
              label="Ingresa tu correo electrónico"
              crossOrigin={undefined}
              value={formik.values.email}
              onChange={handleChangeInput}
              labelProps={{
                className: cn('hidden'),
              }}
              className={cn(
                'rounded-xl !border !border-gray-300 bg-white text-gray-900 focus:!border-gray-500 focus:!border-t-gray-500 focus:ring-gray-500/10',
                {
                  '!border-red-500': formik.errors.email,
                },
              )}
            />
            <ErrorInput error={formik.errors.email} />
          </div>

          <div className="flex flex-col gap-1">
            <Typography
              variant="lead"
              className="text-base font-semibold text-[#6B647C]"
            >
              Contraseña
            </Typography>
            <Input
              type="password"
              name="password"
              label="Ingresa tu contraseña"
              crossOrigin={undefined}
              value={formik.values.password}
              onChange={handleChangeInput}
              labelProps={{
                className: cn('hidden'),
              }}
              className={cn(
                'rounded-xl !border !border-gray-300 bg-white text-gray-900 focus:!border-gray-500 focus:!border-t-gray-500 focus:ring-gray-500/10',
                {
                  '!border-red-500': formik.errors.password,
                },
              )}
            />
            <ErrorInput error={formik.errors.password} />
          </div>
        </div>

        <Link
          href="/auth/forgot-password"
          className="text-base font-normal text-[#27242D]"
        >
          ¿Has olvidado tu contraseña?
        </Link>

        <Button
          type="submit"
          className={cn('rounded-2xl bg-[--bgSoft] text-inherit')}
        >
          Iniciar sesión
        </Button>
      </form>
    </>
  );
};
