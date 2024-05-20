import './App.css';
import Text from './Component/Text';
import Image from './Component/Image';
import Content from './Component/Content';
import { Nav } from './Component/Nav';
import Buttonnav from './Component/Buttonnav';

const menu = [
  {
    image: "public/asset/Group.png",
    text: "Introduce Your Product Quickly & Effectively",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  },
  {
    image: "/asset/Group.png",
    text: "Introduce Your Product Quickly & Effectively",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  },
  {
    image: "/asset/Group.png",
    text: "Introduce Your Product Quickly & Effectively",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  }
];

function App() {
  return (
    <>
     <Nav></Nav>
      <div className='flex justify-around gap-5'>
        <div className="container">
          <Text 
            title='Introduce Your Product Quickly & Effectively' 
            content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' 
          />
          <Buttonnav value="Purchase UI Kit" />

          <Buttonnav  value="Learn More"/>
          
        </div>
        <div className='flex justify-between gap-3 '> 
          <div>
            <Image image="/asset/Group.png" value="Il s'agit d'une image" />
          </div>
        </div>
      </div>

      {/* Render the menu items */}
      <div className='menu-list gap-5'>
        {menu.map((item, index) => (
          <Content key={index} image={item.image} text={item.text} content={item.content} />
        ))}
      </div>
    </>
  );
}

export default App;
