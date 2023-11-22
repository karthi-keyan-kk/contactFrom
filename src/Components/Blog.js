const Blog = () => {
    return (
        <div className="blog" id="blog">
            <div>
                <img src={require("./img-2.jpg")} width="300px" height="250px" style={{marginBottom:"20px", marginTop:"-50px"}} alt="pic" />
                <p style={{textAlign:"justify", padding:"30px", backgroundColor:"white", margin:"10px 20px 0 20px", borderRadius:"20px"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat deserunt sed amet repudiandae quo quia adipisci ipsam ipsa temporibus suscipit dolorem voluptatem non nostrum ad nobis fuga et illum beatae, culpa nam reiciendis? Tempore ipsam nihil maxime, eius, delectus excepturi cumque voluptatibus ab ea facere quasi sequi optio earum?
                </p>
            </div>
            <div>
                <p style={{textAlign:"justify", padding:"30px", backgroundColor:"white", margin:"0 20px 0 0", borderRadius:"20px"}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sit ducimus illum, mollitia ex atque ut cupiditate cumque inventore quam quisquam iure repellendus veniam delectus, eaque harum. Porro corporis minus nihil. Perspiciatis hic animi a quasi aperiam nihil dolor, ea qui repellat accusamus corrupti. Nam quod, nostrum quasi corrupti eligendi minima quibusdam laudantium consectetur ab facilis aliquid laboriosam cumque necessitatibus dolorum asperiores corporis? Eum officiis nam, aliquam fugiat error culpa dignissimos autem voluptates necessitatibus! Magnam ut ab unde totam non consequuntur, accusantium, sequi, et qui laborum ipsam. A incidunt deserunt nam dolorem amet praesentium dolores, rem quisquam, repellat, earum voluptatem!
                </p>
            </div>
        </div>
    );
}
 
export default Blog;