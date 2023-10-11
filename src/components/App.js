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

  // return (
  //   <div>
  //     <Accordion data={faqs} />
  //   </div>
  // );

  //Challenge #1 Tip Calculator

  const [bill, setBill] = useState('')
  const [percentage, setPercentage] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  const tip = (bill * (percentage + percentage2) / 2 ) / 100

  const handleReset = () => {
    setBill('');
    setPercentage(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput 
        bill={bill}
        onBill={setBill}
      />
      <Percentage
        percentage={percentage}
        onPercentage={setPercentage}
      >
        How did you like the service?
      </Percentage>
      <Percentage
        percentage={percentage2}
        onPercentage={setPercentage2}
      >
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <Output 
            bill={bill}
            tip={tip}
          />
          <Button
            bill={bill}
            onReset={handleReset}
          >
            Reset
          </Button>
        </>
      )}
      
    </div>
  )
}


//Exercice #1
// function Accordion({data}) {

//   const [curOpen, setCurOpen] = useState(null)

//   return <div className="accordion">
//     {data.map((el, idx) => 
//       <AccordionItem 
//         curOpen={curOpen}
//         onOpen={setCurOpen}
//         key={el.title} 
//         num={idx + 1} 
//         title={el.title}  
//       >{el.text}</AccordionItem>
//     )}
//     <AccordionItem 
//       curOpen={curOpen}
//       onOpen={setCurOpen}
//       key={"test 1"} 
//       num={30} 
//       title={"Test 1"}  
//     >
//       <p>Hello the world</p>
//     </AccordionItem>
//   </div>;
// }

// const AccordionItem = ({num, title, curOpen, onOpen, children}) => {

//   // const [isOpen, setIsOpen] = useState(false);

//   const isOpen = num === curOpen;

//   const handleToggle = () => {
//     // setIsOpen((isOpen => !isOpen))
//     onOpen(isOpen ? null : num)
//   }

//   return (
//     <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
//       <p className="number">{num < 10 ? `0${num}` : num}</p>
//       <p className="text">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>
//       {isOpen && <div className="content-box">{children}</div>}
//     </div>
//   )
// }

//Exercice #1

//Challenge #1 Tip Calculator

const BillInput = ({bill, onBill}) => {

  return (
    <div>
      <label>
        How much was the bill?
      </label>
      <input 
        type="text" 
        value={bill} 
        onChange={(e) => onBill(+e.target.value)}
        placeholder="Bill"
      />
    </div>
  )
}

const Percentage = ({percentage, onPercentage, children}) => {

  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  )
}

const Output = ({bill, tip}) => {

  return <h3>You pay ${bill + tip} (${bill} + ${tip} tip)</h3>
}

const Button = ({bill, onReset, children}) => {

  return (
  <button onClick={onReset}>
    {children}
  </button>
  )
}

export default App;