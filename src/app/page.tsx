'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/Navbar/Navbar';
import HomeSlider from '@/components/HomeSlider/HomeSlider';
import CategorieSlider from '@/components/Categories/CategorieSlider';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSlider />
      <CategorieSlider/>
      <h1>This is Home</h1>
    </main>
  );
}
