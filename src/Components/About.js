const About = () => {
    return (
        <div className="about" id="about">
            <div>
                <img src={require("./img-4.png")} width={450} height={400} style={{marginTop:"50px"}} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eos voluptatem minima ad eaque iste vero provident porro eius eveniet mollitia fugit consequatur quisquam quia, obcaecati earum ducimus at? Quo.</p>
            </div>
            <div className="about-col-2">
                <p style={{textAlign:"justify", padding:"30px", backgroundColor:"white", margin:"0 0 20px 20px", borderRadius:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut quidem reprehenderit quis at rem magnam, adipisci quaerat alias aliquam rerum iure sit voluptas praesentium? Quis impedit, alias perspiciatis sint dicta itaque aliquam sequi? Reiciendis, molestias. Officiis accusantium praesentium eos voluptas numquam repellendus modi impedit, id culpa, incidunt harum unde.</p>
                <p style={{textAlign:"justify", padding:"30px", backgroundColor:"white", margin:"0 0 5  0 20px", borderRadius:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui architecto sit optio aliquid. Repellendus aliquam dolorem excepturi libero? Iusto adipisci a eaque amet fugit nihil tenetur minima error. Accusamus voluptatum, voluptate a quos voluptatem explicabo accusantium mollitia excepturi officiis voluptatibus, aspernatur minima exercitationem vel quae at? Eaque quod necessitatibus ab.</p>
            </div>
        </div>
    );
}
 
export default About;