import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
// import { testimonials } from "../data";
// import { PDFDownloadLink} from "@react-pdf/renderer";


export default function Resume() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('resumeLucianoRios.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resumeLucianoRios.pdf';
            alink.click();
        })
    })
}
return (
    <div className="container px-5 py-10 mx-auto text-center">
        <center>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">Curriculum Vitae      </h1>
           
            <button onClick={onButtonClick}  class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                Download PDF
            </button>
        </center>
    </div>
);

}
 