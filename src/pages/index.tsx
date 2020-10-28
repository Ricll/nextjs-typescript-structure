import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/rocketseat.svg" width={200} height={100} />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
