import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
// import { testimonials } from "../data";
// import { PDFDownloadLink} from "@react-pdf/renderer";


export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center ">
      
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Curriculum Vitae
        </h1>
        <div className="container flex-wrap m-4 mx-auto text-center">
          <div class="flex space-x-2 justify-center">
          {/* <PDFDownloadLink document={resume}> */}
  <button type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><a href="../public/resume.pdf" download="resume.pdf">Download PDF</a></button>
  {/* </PDFDownloadLink> */}
</div>
        </div>
      </div>
    </section>
  );
}
