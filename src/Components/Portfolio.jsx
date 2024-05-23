/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Personal Portfolio 🎉",
    description:
      "My personal portfolio website serves as a showcase of my skills, projects, and experiences.Developed using HTML, CSS, and JavaScript, this interactive platform provides visitors with acomprehensive view of my professional background and achievements.",
    url: "https://my-mahi.vercel.app/",
  },
  {
    title: "Jewellery Site💍",

    description:
      "Developed beautifully crafted Jewellery website,using React for a seamless and dynamic user experience. Our site showcases an exquisite collection of jewellery pieces, each designed to captivate and inspire.Experience the elegance and sophistication of our jewellery collection today!",
    // url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site 📄",
    description:
    "My personal portfolio website serves as a showcase of my skills, projects, and experiences.Developed using HTML, CSS, and JavaScript, this interactive platform provides visitors with acomprehensive view of my professional background and achievements.",
    url: "https://my-mahi.vercel.app/",
  },
  {
    title: "GitHub Codespaces and github.dev 🛠️",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://github.com/manishapandey70",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
