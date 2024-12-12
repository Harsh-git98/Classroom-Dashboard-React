import React from 'react';

const cardsData = [
  {
    id: 1,
    title: "PYQs",
    buttonText: "Start Practicing now",
    svgPath: `
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      ></path>`,
    link: "https://drive.google.com/drive/folders/1EWSwlGC8_BnF3F7FmtccNVXi2Nejm1pn?usp=drive_link",
  },
  {
    id: 2,
    title: "DSA practice",
    buttonText: "Start learning now",
    svgPath: `
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      ></path>`,
    link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
  },
  {
    id: 3,
    title: "Coursework",
    buttonText: "Start learning now",
    svgPath: `
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      ></path>`,
    link: "https://drive.google.com/drive/u/1/folders/1s_IgZa8PwEOagFCGX5PcWIWUa0BvOfre",
  },
  {
    id: 4,
    title: "Web Dev Course",
    buttonText: "Start learning now",
    svgPath: `
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      ></path>`,
    link: "https://drive.google.com/drive/folders/1-VvzEkwMqCVKwzjFdGZaj4KCs3yW4RT7?usp=drive_link",
  },
  {
    id: 5,
    title: "Syllabus",
    buttonText: "Start Exploring Now",
    svgPath: `
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      ></path>`,
    link: "https://drive.google.com/file/d/1swBvgG-DfbqdACWGBhuVq00EfyHSciGb/view?usp=drive_link",
  },
  {
    id: 6,
    title: "IT freshers",
    buttonText: "View photos",
    svgPath: `
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      ></path>`,
    link: "https://drive.google.com/drive/folders/14EwH5cmXp1vMmE_M2bI_Lblo052evTxH?usp=drive_link",
  },
  {
    id: 7,
    title: "Teachers Day",
    buttonText: "View photos",
    svgPath: `
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      ></path>
      <path
        stroke-width="1.5"
        stroke="#cbe6ff"
        d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      ></path>`,
    link: "https://drive.google.com/drive/folders/1-67KOGY6t3dCDvdJ6GGZY281r80pxARW?usp=drive_link",
  }
  // Add more cards as needed
];

function Resource() {
  return (
    <main className="main-container">
      <h1> RESOURCES</h1>
      <br />
      <div className="resflex">
        {cardsData.map((card) => (
          <a href={card.link} key={card.id}>
            <div className="card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="120"
                className="App-logo"
                dangerouslySetInnerHTML={{ __html: card.svgPath }}
              ></svg>
              <div className="header">{card.title}</div>
              <button className="App-button">{card.buttonText}</button>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Resource;