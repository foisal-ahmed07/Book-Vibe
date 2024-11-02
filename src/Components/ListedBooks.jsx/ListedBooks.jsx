import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../Utlity/adToDb";
import Book from "../Book/Book";
const ListedBooks = () => {
  const allBooks = useLoaderData();

  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoreReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  return (
    <div>
     
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold">Books I read: {readList.length}</h2>

          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }


        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
