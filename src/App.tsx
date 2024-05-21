import './App.css';
import Text from './Component/Text';
import Image from './Component/Image';
import Content from './Component/Content';
import { Nav } from './Component/Nav';
import Buttonnav from './Component/Buttonnav';
import { Icon } from './Component/Icon';
import { Doublebutton } from './Component/Doublebutton';

const menu = [
  {
    image: "public/asset/Mobile Marketing-pana copy.svg",
    text: "Light, Fast & Powerful",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  },
  {
    image: "public/asset/Team goals-pana.svg",
    text: "Light, Fast & Powerful",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  },
  {
    image: "public/asset/Mobile Marketing-bro.svg",
    text: "Light, Fast & Powerful",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  }
];

function App() {
  return (
    <>
    <div className="bg-[url('asset/Path.svg')] bg-contain bg bg-no-repeat mb-[100px] bg-[290px] ">
     <Nav></Nav>
        <div className="container">
          <Text 
            title='Introduce Your Product Quickly & Effectively' 
            content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' 
          />
           {/* <Doublebutton/> */}
          
        </div>

       
          <div className='relative ml-20 left-[500px] bottom-[230px]'>
            <Image image="/asset/Group.png" value="Il s'agit d'une image" />
          
        </div>
      
    </div>
      {/* Render the menu items */}
      <div className='menu-list gap-2 '>
        {menu.map((item, index) => (
          <Content key={index} image={item.image} text={item.text} content={item.content} />
        ))}
      </div>
    
      <div className="mt-5">
          <Icon  icon="public/asset/Pricing.svg"/>
      </div>
     
    </>
  );
}

export default App;
