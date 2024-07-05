import Image from 'next/image';

import { Typography } from '@/features/ui/utils/materialTailwindExports';

import { FormLogin } from '@/features/auth/components';

import LogoArli from '@/public/LogoArliWhite.png';

const LoginPage = () => {
  return (
    <>
      <div className="flex h-full min-h-screen w-full flex-wrap">
        {/* video */}
        <div className="hidden h-screen w-full p-8 md:block md:w-1/2">
          <div className="relative flex h-full overflow-hidden rounded-2xl bg-black">
            <video
              loop
              muted
              autoPlay
              className="absolute left-0 top-0 h-full w-full object-cover"
            >
              <source
                src="https://tides.arli.cloud/assets/images/auth/video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="z-10 flex w-full flex-col justify-center gap-24 bg-black/60 p-6">
              <Image
                alt="Logo"
                src={LogoArli}
                className="w-full max-w-[192px] object-contain"
              />

              <div>
                <Typography
                  variant="h2"
                  className="text-6xl font-normal text-white"
                >
                  Data
                </Typography>
                <Typography
                  variant="h2"
                  className="text-6xl font-normal text-white"
                >
                  to adapt
                </Typography>
                <Typography
                  variant="h2"
                  className="text-6xl font-normal text-white"
                >
                  and evolve
                </Typography>
              </div>

              <Typography
                variant="lead"
                className="font text-xl font-normal text-white"
              >
                Circular Economy Traceability Software
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex h-screen w-full justify-center md:w-1/2 md:items-center">
          <div className="mx-4 my-12 w-full max-w-sm">
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
