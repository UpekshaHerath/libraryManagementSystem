import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/library1.jpg";
import img2 from "../assets/library2.png";
import img3 from "../assets/library3.jpg";
import React, { useState } from "react";

function NoTransitionExample() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item  interval={1000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Online Library Management</h3>
          <p>A library management system is a software application that helps librarians and library staff manage the day-to-day operations of a library. It allows for the cataloging, storage, and retrieval of library materials, including books, periodicals, and digital resources. The system also facilitates circulation activities, such as checkouts and renewals, and provides tools for managing the library's patrons and their borrowing activities. Additionally, many library management systems offer features such as automation of routine tasks, integration with other library systems, and the ability to generate reports and analyze data. With a library management system, librarians can work more efficiently, serve their patrons more effectively, and ensure the long-term preservation of the library's collections.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Online School Library Management</h3>
          <p>School library management refers to the process of organizing and maintaining a school library to meet the needs of students, teachers, and staff. It involves tasks such as acquiring and cataloging books, managing circulation and circulation policies, planning and executing library programs, and coordinating with staff and administration to ensure the library is meeting the needs of the school community. Effective library management requires knowledge of library science, instructional technology, and administration.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Library Management system is easy</h3>
          <p>
          Library management systems can indeed ease the tasks of librarians and library staff by automating many of the manual processes involved in managing a library. These systems allow for the digitization of library collections, making it easier to store, organize, and access information. They also streamline tasks such as checkouts, renewals, and cataloging, saving time and reducing the risk of errors. Additionally, library management systems often provide features such as tracking patron activity and generating reports, which can help librarians make informed decisions about collection development and other important aspects of library operations. Overall, library management systems can help to make library operations more efficient, effective, and accessible to users.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;
