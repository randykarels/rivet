import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Slideshow from '../components/slideshow'
import Playlist from '../components/playlist'

const images = [
  "/static/images/grow.jpg",
  "https://res.cloudinary.com/rkrls/image/upload/c_scale,fl_progressive,w_1800/v1493344709/hollywood_vine.jpg",
  "https://d33wubrfki0l68.cloudfront.net/753e840ac575731f667d7497c931c731387034b3/2db56/gallery/alaska/images/alaska-img_4412.jpg",
  "https://d33wubrfki0l68.cloudfront.net/bb620a6e55edc73b65db2102e04ef3f38e2a20cf/9b16d/gallery/alaska/images/alaska-img_4444.jpg",
  "https://d33wubrfki0l68.cloudfront.net/fbcba3ebb7ec58ad71dbc68e4cc0c5cae8c8b78c/a0450/gallery/alaska/images/alaska-img_4644.jpg",
  "https://d33wubrfki0l68.cloudfront.net/ee1110549e0f2ef05ea1047c3a70cbbc2841a3ac/e3337/gallery/alaska/images/alaska-img_4969.jpg",
  "https://d33wubrfki0l68.cloudfront.net/e14bb11d3f82a76e5cac562c1e83c57165d792aa/a4d9d/gallery/alaska/images/alaska-img_5092.jpg",
];

const tracks = [
  {name: "track one", src: "/static/music/one.mp3"},
  {name: "track two", src: "/static/music/two.mp3"},
  {name: "track three", src: "/static/music/three.mp3"},
]

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Slideshow images={images} width="100%" />

    <Playlist tracks={tracks} />

    <h1 className='title'>Rivet</h1>

  </div>
)

export default Home
