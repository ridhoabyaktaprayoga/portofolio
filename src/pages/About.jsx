import React from 'react';
import { Layout } from '../layouts';
import { Timeline } from '../components';

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 pb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            About Me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            Hi, I’m Ridho Abiyakta Prayoga, the eldest of three siblings.
            I have a strong interest in IT, particularly and software and web development.
            My curiosity for technology drives me to keep learning and improving.
          </p>
        </section>
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            Work Experience
          </h1>
          <Timeline
            position="Worker"
            company="RS Clean"
            location="Jakarta"
            type="Internship"
            duration="May 2023 - Jul 2024"
          />
        </section>
        <section className="mt-6">
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            Education
          </h1>
          <Timeline
            position="Rekayasa Perangkat Lunak"
            company="SMK Negeri 21 Jakarta"
            location="Jakarta Pusat"
            type="Full Time"
            duration="2023 - 2025"
          />
          <Timeline
            position="Sekolah Menengah Pertama"
            company="SMPN 221 Jakarta"
            location="Jakarta Utara"
            type="Full Time"
            duration="2020 - 2023"
          />
          <Timeline
            position="Sekolah Dasar"
            company="SDN 03 Pagi"
            location="Jakarta Utara"
            type="Full Time"
            duration="2014 - 2020"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
