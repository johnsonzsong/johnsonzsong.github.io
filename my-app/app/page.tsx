import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between lg:p-24 sm:p-12 font-opensans z-10 lg:flex">
      <div className="sm:my-16 grid grid-cols-5 gap-16">
        <div className="col-span-3 ...">
          <p className="mb-6">
            Hi 👋 I&apos;m Johnson.
          </p>
          <Image alt="headshot photo" src={'/bio-pic.jpeg'} width={200} height={200} style={{ borderRadius: 16 }} />
          <p className="mt-6 mb-6 text-2xl">
            I am currently at <a href="https://www.meta.com/" className="text-sky-500" target="_blank">Meta</a>, where I build insights for Facebook creators. I was previously at <a href="https://c3.ai/" className="text-sky-500" target="_blank">C3.ai</a>, where I designed enterprise AI tooling.
          </p>
          <div>
            <a href="/resume.pdf" className="mr-12 text-sky-500" target="_blank">
              Resume
            </a>
            <a href="mailto:johnsonsong@stanford.edu" className="text-sky-500" target='_blank'>
              Email
            </a>
          </div>
        </div>
        <div className="col-span-2 ...">
          <div className="mb-12">
            <h2 className={`mb-3 text-sm font-semibold opacity-50`}>
              EDUCATION
            </h2>
            <div className="mb-4">
              <p className="font-bold">
                Stanford University
              </p>
              <p>
                M.S. Computer Science <span className="opacity-40">(2020 - 2021)</span>
              </p>
            </div>
            <div>
              <p className="font-bold">
                Stanford University
              </p>
              <p>
                B.S. Computer Science <span className="opacity-40">(2016 - 2020)</span>
              </p>
            </div>
          </div>
          <div className="sm:mb-12 lg:mb-0">
            <h2 className={`mb-3 text-sm font-semibold opacity-50`}>
              WORK
            </h2>
            <div className="mb-4">
              <p className="font-bold">
                Meta
              </p>
              <p>
                Software engineer <span className="opacity-40">(2021 - present)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bold">
                C3.ai
              </p>
              <p>
                Product design intern <span className="opacity-40">(2021)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bold">
                Carta
              </p>
              <p>
                Product designer <span className="opacity-40">(2021)</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bold">
                Meta
              </p>
              <p>
                Software engineering intern <span className="opacity-40">(2019, 2020)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
