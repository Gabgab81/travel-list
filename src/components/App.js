import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

const App = () => {

  // const [items, setItems] = useState([]);

  // const handleAddItems = (item) => {
  //   setItems((items) => [...items, item])
  // }

  // const handleDeleteItem = (id) => {
  //   setItems((items) => items.filter(item => item.id !== id))
  // }

  // const handleToggleItem = (id) => {
  //   setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  // }

  // const handleClearItems = () => {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete all items?"
  //   )
  //   // confirmed && setItems([]);
  //   if (confirmed) setItems([])
  // }

  // return (
  //   <div className="app">
  //     <Logo />
  //     <Form onAddItems={handleAddItems} />
  //     <PackingList 
  //       items={items} 
  //       onDeleteItem={handleDeleteItem}
  //       onToggleItem={handleToggleItem}
  //       onClearItems={handleClearItems}
  //     />
  //     <Stats items={items} />
  //   </div>
  // )

  //Exercice #1

  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}) {
  return <div className="accordion">
    {data.map((el, idx) => <AccordionItem key={el.title} num={idx + 1} title={el.title} text={el.text}  />)}
  </div>;
}

const AccordionItem = ({num, title, text}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen => !isOpen))
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}

export default App;