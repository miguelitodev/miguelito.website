import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image loading='lazy' placeholder='blur' blurDataURL='/img/hamster-loading.jpg' src="/img/hamster-loading-coming.gif" width={300} height={300} alt="Hamster doing things" />
      <h1 className='mt-3 font-sans text-3xl antialiased font-bold tracking-wide'>Coming soon</h1>
    </main>
  )
}
