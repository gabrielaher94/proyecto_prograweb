import CardItem from "../components/CardItem"

function Home({items}) {
    return(
        <div className="container bg-primary text-blue p-4">{'Bienvenidos a Soportes Tecnicos S,A'} 
        {items.length >0 &&(
            <>
            <h2 className="text-center mb-4">{items[0].title} </h2>
            <p className="text-center mb-5">{items[0].description} </p>
            </>
            )}
            <div className="row">
                {items.slice(1).map((item, index)=>(
                <div className="col-md-4 mb-4" key={index}>
                <CardItem title={item.title}
                description={item.description} />
                </div>
            ))}
            </div>
        </div>
    )
}
export default Home;