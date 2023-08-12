import { useState } from 'react';

const faqs = [
  {
    question: 'Apa itu ReactJS?',
    answer:
      'ReactJS adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan responsif. Ia dikembangkan oleh Facebook dan banyak digunakan dalam pengembangan aplikasi web modern.',
  },
  {
    question: 'Apa itu komponen dalam React?',
    answer:
      'Komponen dalam React adalah blok bangunan dasar dari antarmuka pengguna. Mereka memungkinkan Anda untuk membagi UI menjadi bagian-bagian yang lebih kecil dan dapat digunakan kembali.',
  },
  {
    question: 'Apa itu JSX?',
    answer:
      'JSX (JavaScript XML) adalah ekstensi sintaksis yang digunakan dalam React untuk memungkinkan penulisan kode HTML-terlihat di dalam JavaScript. Ini membantu dalam pembuatan struktur antarmuka dengan lebih mudah.',
  },
];

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Item
          key={item.question}
          num={i}
          question={item.question}
          answer={item.answer}
          current={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </div>
  );
}

function Item({ num, question, answer, current, onOpen }) {
  const isOpen = num === current;

  function handleOnOpen() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="item" onClick={handleOnOpen}>
      <h2 className={isOpen ? 'open' : ''}>
        {num + 1}. {question}
      </h2>
      {isOpen && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
