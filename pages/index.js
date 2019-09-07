import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Slideshow from '../components/slideshow'

const images = [
  "/static/images/grow.jpg",
  "https://d33wubrfki0l68.cloudfront.net/753e840ac575731f667d7497c931c731387034b3/2db56/gallery/alaska/images/alaska-img_4412.jpg",
  "https://d33wubrfki0l68.cloudfront.net/bb620a6e55edc73b65db2102e04ef3f38e2a20cf/9b16d/gallery/alaska/images/alaska-img_4444.jpg",
  "https://d33wubrfki0l68.cloudfront.net/fbcba3ebb7ec58ad71dbc68e4cc0c5cae8c8b78c/a0450/gallery/alaska/images/alaska-img_4644.jpg",
  "https://d33wubrfki0l68.cloudfront.net/ee1110549e0f2ef05ea1047c3a70cbbc2841a3ac/e3337/gallery/alaska/images/alaska-img_4969.jpg",
  "https://d33wubrfki0l68.cloudfront.net/e14bb11d3f82a76e5cac562c1e83c57165d792aa/a4d9d/gallery/alaska/images/alaska-img_5092.jpg",
];

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Slideshow images={images} width="200">
    </Slideshow>

    <div className='hero'>
      <h1 className='title'>Rivet</h1>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .hero h1 {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 36px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
