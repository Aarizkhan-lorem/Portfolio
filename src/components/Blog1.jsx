import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Blog1 = () => {
  return (
    <div className="mt-16 w-[95%] sm:w-2/3 mx-auto">
      <ScrollRestoration />
      <div className="flex flex-col gap-4 w-full py-12 border-b">
        <h1 className="text-3xl font-semibold italic pl-3">
          "From Beginner to Web Developer: My Roadmap and Resources" – A guide
          for beginners.
        </h1>
        <p className="pl-3">Published on 27 September, 2024</p>
        <div className="flex gap-6">
          <div className="px-4 py-1 border rounded-2xl">
            Full-Stack Development & Deployment{" "}
          </div>
          <div className="px-4 py-1 border rounded-2xl">
            Building Real-World Projects & Portfolio
          </div>
        </div>
      </div>
      <div className="pt-6">
        <h1 className="text-3xl font-semibold">Introduction</h1>
        <p className="text-lg mt-4">
          Web development is an exciting and ever-evolving field, but starting
          out can feel overwhelming. With so many technologies, frameworks, and
          best practices, it’s easy to get lost. <br /> If you're wondering
          "Where do I start?", "What should I learn first?", or "How do I become
          a web developer?", this guide is for you! <br /> In this blog, I'll
          walk you through a clear roadmap—from the basics of HTML, CSS, and
          JavaScript to mastering frontend, backend, and full-stack development.
          Plus, I’ll share the best resources that helped me along the way.{" "}
          <br /> By the end, you’ll have a solid path to follow, along with
          project ideas to build your portfolio and land your first web
          development job. Let’s get started!
        </p>
      </div>
      <div className="py-6">
        <h1 className="text-3xl font-semibold">
          Step 1: Understanding the Basics (HTML, CSS, JavaScript)
        </h1>
        <div className="ml-2 text-lg flex flex-col gap-2">
          <h2 className="mt-2 text-2xl underline">
            HTML (HyperText Markup Language)
          </h2>
          <p className="">
            HTML is the foundation of every website. It structures content using
            elements like headings, paragraphs, links, and forms.
          </p>
          <p>Recommended Resources:</p>
          <ul className="list-disc text-blue-600 pl-5">
            <li>
              <a
                target="#"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                MDN Web Docs - HTML <br />
              </a>
            </li>
            <li>
              <a target="#" href="https://www.w3schools.com/">
                W3 Schools
              </a>
            </li>
          </ul>

          <h2 className="text-2xl underline">CSS (Cascading Style Sheets)</h2>
          <p>
            CSS makes your website visually appealing by adding styles, layouts,
            and responsiveness. Learn about:
          </p>
          <ul className="list-disc pl-5">
            <li>Selectors and properties</li>
            <li>Flexbox and Grid (for layouts)</li>
            <li>Tailwind CSS (utility-first approach)</li>
          </ul>
          <p>Recommended Resources:</p>
          <ul className="list-disc text-blue-600 pl-5">
            <li>
              <a
                target="#"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                MDN Web Docs - CSS
                <br />
              </a>
            </li>
            <li>
              <a
                target="#"
                href="https://www.youtube.com/playlist?list=PL0dnkEVC0N3xVZdcxByKKZevXxxddK8es"
              >
                CSS Grid & Flexbox - Love Babbar
              </a>
            </li>
            <li>
              <a target="#" href="https://www.youtube.com/watch?v=6a8CNTk9yo4">
                Tailwind CSS -Love Babbar
              </a>
            </li>
          </ul>

          <h2 className="text-2xl underline">
            {" "}
            JavaScript (Programming the Web)
          </h2>
          <p>
            JavaScript brings websites to life with dynamic behavior. Focus on:
          </p>
          <ul className="list-disc pl-5">
            <li> Variables, Data Types, Functions</li>
            <li>DOM Manipulation</li>
            <li>Events and Async JavaScript</li>
          </ul>
          <p>Recommended Resources:</p>
          <ul className="list-disc text-blue-600 pl-5">
            <li>
              <a
                target="#"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                JavaScript.info
                <br />
              </a>
            </li>
            <li>
              <a target="#" href="https://eloquentjavascript.net/">
                Eloquent JavaScript (Free Book)
              </a>
            </li>
            <li>
              <a
                target="#"
                href="https://www.youtube.com/playlist?list=PLHzs8hOU-sf5_9JNubPJpgMvTQSlaeRCe"
              >
                Java Script - Love Babbar
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* second */}
      <div className="py-6 border-t">
        <h1 className="text-3xl font-semibold">
          Step 2: Frontend Development (React & UI Frameworks)
        </h1>
        <p className="text-lg mt-3">
          Once you're comfortable with JavaScript, it's time to build real-world
          applications using modern frontend technologies.
        </p>
        <div className="ml-2 text-lg flex flex-col gap-2">
          <h2 className="mt-2 text-2xl underline">React.js</h2>
          <p className="">
            React is the most popular JavaScript library for building user
            interfaces. Key topics to learn:
          </p>

          <ul className="list-disc pl-5">
            <li> Components and Props</li>
            <li> State Management (useState, useReducer)</li>
            <li> React Hooks (useEffect, useContext)</li>
            <li> React Router (for navigation)</li>
          </ul>

          <p>Recommended Resources:</p>
          <ul className="list-disc text-blue-600 pl-5">
            <li>
              <a target="#" href="https://react.dev/">
                React Docs <br />
              </a>
            </li>
            <li>
              <a target="#" href="https://www.youtube.com/watch?v=bMknfKXIFA8">
                The Beginner's Guide to React – freeCodeCamp
              </a>
            </li>
          </ul>

          <h2 className="text-2xl underline">UI Libraries & Tools</h2>
          <p>Using a UI framework speeds up development:</p>
          <ul className="list-disc pl-5">
            <li>Tailwind CSS – Utility-based styling</li>
            <li> Shadcn/ui – Prebuilt components for React</li>
            <li>Next.js – Full-stack React framework</li>
          </ul>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Blog1;
