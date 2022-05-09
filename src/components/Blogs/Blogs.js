import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='about-bg'>
                <h5>1.Q: Difference between javascript and nodejs?</h5>
                <p>Ans: JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feels.
                    NodeJs is an open-source, cross-platform environment that allows you to create server-side applications.</p>
            </div>
            <div className='about-bg'>
                <h5>2.Q: When should you use nodejs and when should you use mongodb?</h5>
                <p>Ans:  Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.</p>

               <p>
               MongoDB is an object-oriented, simple, dynamic, and scalable NoSQLdatabase.It is based on the NoSQL document store model. The data objectsare storedas separate documents inside a collection.
               </p>
            </div>
            <div className='about-bg'>
                <h5>3.Q: Differences between sql and nosql databases.</h5>
                <p>Ans: SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. </p>
                <p> NoSQL database provides a mechanism for storage and retrieval of data that is modeled other than in tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL.</p>
            </div>
        </div>
    );
};

export default Blogs;