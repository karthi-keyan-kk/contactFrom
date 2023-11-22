import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

const Home = () => {

    const word = ["AI", "Data Science", "Machine Learning", "Deep Learning"]

    const [count, setCount] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count == 3 ? 0: count+1);
        }, 3000);
        return () => clearInterval(interval);
    }, [count]);
 
    return (
        <div className="home" id="home">
            <div>
                <h1 style={{marginBottom:"20px", marginTop:"150px"}}>M S Technology</h1>
                <p style={{marginTop:"-10px"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nemo repellat voluptatem placeat, mollitia accusamus magni corporis, ab accusantium repellendus minus, ea sint magnam? Ratione accusantium dolorum eum dignissimos rem, hic voluptate numquam fugiat, veniam sequi minus reprehenderit! Sint labore quod ab sed cum laudantium commodi natus, quasi qui. Inventore vero eius odit quam sed cupiditate, sunt sapiente, dolorum optio laboriosam officiis consectetur maxime modi molestias cumque, itaque illum at minus odio? Praesentium architecto iure aperiam corrupti necessitatibus. Ratione nemo labore neque repudiandae non eveniet velit, dolores quidem, temporibus quasi, consequatur ex error reiciendis voluptas aliquid dolor vitae. Accusantium, iusto.
                </p>
                <Button variant='secondary'>Explore</Button>
                <img src={require("./img-5.avif")} width={350} height={300} alt="" />
            </div>
            <div className='home-col-2'>
                <img src={require("./img-5.avif")} width={350} height={300} style={{marginBottom:"20px", marginTop:"150px"}} alt="" />
                <h1 style={{margin:"30px 0"}}>{word[count]}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi aperiam facere nam at sapiente autem incidunt impedit saepe et! Tempora distinctio autem non magnam perferendis, ipsam iste recusandae, totam laborum cumque fuga harum consequatur! Aut labore reiciendis nemo enim similique delectus! Recusandae ab iste voluptas illum repellendus quia explicabo.</p>
            </div>
            
        </div>
    );
}
 
export default Home;