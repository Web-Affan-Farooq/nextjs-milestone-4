import React from "react";
import Card from "./Card";

// {next:{revalidate:10}} --- revalidate the data ----- ISG
// {cache:"force-cache"}  -- static site generation
// {cache:"no-store"} -- server side rendering

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      cache:"force-cache" // enables static site generation
    });

    const data = await response.json();

    if (!response.ok && response.status !== 200) {
      console.log(`Fail to fetch data ${new Date().toLocaleDateString()}`);
    }

    return data;

  } catch (err) {
    console.log("Error while fetching");
    return [];
  }
};

const SSG =  async () => {

  const todos= await getData(); 

  return (
      <div className="flex flex-col flex-wrap gap-5 justify-center items-center">
        <div>      <h1 className="text-white text-2xl">Fetching from server side using SSG</h1>
        </div>
        <br />
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {todos.map((todo:any) => {
        return <Card completed={todo.completed} description={todo.title} key={todo.id}/>
      })}
        </div>
      </div>
  );
};

export default SSG;