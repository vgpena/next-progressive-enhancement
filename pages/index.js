import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const sections = [
  {
    title: "title1",
    body: "Doggo ipsum borkdrive heckin good boys wrinkler borking doggo super chub smol borking doggo with a long snoot for pats big ol very good spot, borkf most angery pupper I have ever seen heckin shoober long woofer length boy. What a nice floof long woofer shibe very hand that feed shibe, sub woofer. What a nice floof you are doin me a concern adorable doggo ruff heckin good boys pupper, doggorino tungg heckin angery woofer. Smol you are doin me a concern yapper heckin good boys you are doing me a frighten, doge blop. Porgo clouds shooberino length boy lotsa pats, doing me a frighten pats. length boy lotsa pats yapper. Ruff aqua doggo heck, thicc. Big ol pupper shoob ur givin me a spook extremely cuuuuuute, long woofer stop it fren. Very jealous pupper heck very taste wow wow very biscit, long bois you are doing me the shock. Many pats heck long woofer heckin angery woofer pats, thicc very jealous pupper borking doggo.",
  },
  {
    title: "title2",
    body: "Clouds you are doing me a frighten many pats doggorino ruff puggorino mlem doge long bois heckin good boys, doing me a frighten doggo pupperino bork maximum borkdrive extremely cuuuuuute long woofer. Heck pupperino most angery pupper I have ever seen you are doin me a concern many pats, sub woofer smol sub woofer. Heck shibe very jealous pupper super chub, borking doggo. Floofs sub woofer woofer, wow very biscit.",
  },
];

function StaticAccordionSection(props) {
  const { title, body } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function DynamicAccordionSection(props) {
  const { title, body } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2
        style={{ color: "tomato", cursor: "pointer" }}
        role="button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
      </h2>
      <p style={{ display: isExpanded ? "block" : "none" }}>{body}</p>
    </div>
  );
}

function Accordion(props) {
  const { sections } = props;
  const [hasJS, setHasJS] = useState(false);

  useEffect(() => {
    console.log("JS detected");
    setHasJS(true);
  }, []);

  return sections.map((section) => {
    return (
      <div key={section.title}>
        {hasJS
          ? DynamicAccordionSection(section)
          : StaticAccordionSection(section)}
      </div>
    );
  });
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Accordion sections={sections} />
      </main>
    </div>
  );
}
