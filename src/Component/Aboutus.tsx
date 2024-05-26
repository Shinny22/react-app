import React from "react";

interface Props {}

const Aboutus = ({}) => {
	return (
		<div className="grid grid-flow-col gap-5  ">
			<div>
            <img
                    className="w-[500px] h-[350px] shadow-inner shadow-lg shadow-blue rounded-3xl"
                    src="public/asset/Collab-bro.svg"
                />
			</div>
			<div>
				<h1 className=" text-3xl  mb-3 text-center">About us</h1>
				<p className="text-light font-thin ml-[30px]">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
					consequat massa quis enim.
				</p>

                <p className="text-light font-thin mt-[70px] ml-[80px]">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
					consequat massa quis enim.
				</p>
			</div>
            <div>
            
             
            </div>
		</div>
	);
};

export default Aboutus;
