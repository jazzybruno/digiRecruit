import WhyChooseComp from './WhyChooseComp';
const AboutComponent = () => {
    const data = [
        {"key" : 1 , "title" : "Wider Reach" , "body" : "Digital recruitment allows employers to access a larger pool of talent beyond their local area" , "color" : "#ff82bb" , "avatar" : 1 },
        {"key" : 2 , "title" : "Cost-Effectiveness" , "body" : "Digital recruitment allows employers to access a larger pool of talent beyond their local area." , "color" : "#67c340" , "avatar" : 2 },
        {"key" : 3 , "title" : "Time Efficiency" , "body" : "Digital recruitment allows employers to access a larger pool of talent beyond their local area." , "color" : "#fe5975" , "avatar" : 3 },
        {"key" : 4 , "title" : "Enhanced Candidate Experience:" , "body" : "Digital recruitment allows employers to access a larger pool of talent beyond their local area." , "color" : "#903ce2" , "avatar" : 4 },
        {"key" : 5 , "title" : "Data-driven Decision Making" , "body" : "Digital recruitment allows employers to access a larger pool of talent beyond their local area. " , "color" : "#fe7d42" , "avatar" : 5 },
        {"key" : 6 , "title" : "Diverse Sourcing Options" , "body" : "Digital recruitment allows employers to access a larger pool of talent beyond their local area." , "color" : "#518bf2" , "avatar" : 6 },
    ]
    return ( 
        <div className='w-[100%] h-[100vh] flex flex-row justify-center items-center mt-10 gap-5'> 
            {/* the few details part  */}
           <div className='flex flex-col w-[35%] justify-center items-center space-y-2'>
            <h1 className='text-black font-bold text-center'>Why Choose </h1>
            <div className='text-2xl'>LOGO</div>
            <div className='text-xl w-[70%] text-center '>Look into yourself and get something in return as your achievement</div>
           </div>
           {/* the details part  */}
           <div className='flex flex-row flex-wrap w-[60%] gap-5'>
                {data.map((item) => {
                    return( <WhyChooseComp key={item.key} title={item.title} body={item.body} bgcolor={item.color} avatar={item.avatar} /> )
                })}
           </div>
        </div>
     );
}
 
export default AboutComponent;