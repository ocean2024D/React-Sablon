
import Pizza from "./Pizza";
const pizzas = [{
  title:"Sucuklu pizza",
  description:"Lezzetli pizzalar",
  image:"pizza1.png",
  price : 300,
  
  },
  {
    title:"Karisik pizza",
    description:"Lezzetli pizzalar",
    image:"pizza1.png",
    price : 300,
    
    },
    {
      title:"sebzeli pizza",
      description:"Lezzetli pizzalar",
      image:"pizza1.png",
      price : 200,
      
      },
      {
        title:"Napoliten pizza",
        description:"Lezzetli pizzalar",
        image:"pizza1.png",
        price : 200,
        
        },
        {
          title:"Mantarli pizza",
          description:"Lezzetli pizzalar",
          image:"pizza1.png",
          price : 200,
          
          },
          {
            title:"Ispanakli pizza",
             description:"Lezzetli pizzalar",
            image:"pizza1.png",
            price : 200,
            
            },
        {
          title:"Karisik pizza",
        description:"Lezzetli pizzalar",
          image:"pizza1.png",
          price : 200,
          
          },
    {
      title:"Acili pizza",
       description:"Lezzetli pizzalar",
      image:"pizza1.png",
      price : 300,
      
      }];

export default 
function PizzaList() {
  return (
    <div className="pizza-list">
      <h2>Pizza List</h2>

      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {
      pizzas.map((p)=> (
        <Pizza title={ p.title } image={p.image} price = {p.price} description={p.description}/>))}
      </div>
    </div>
  );
}