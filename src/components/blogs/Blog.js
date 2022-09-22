import React from 'react';
import './Blog.css';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';



const Blog = (props) => {
    const h3 = {
        color : '#181416',
        fontFamily: 'poppins',
        textShadow : '2px 2px rgb(255 233 233)',
        margin: '2rem 0' 
      }     

    return (
        <div style={{margin: '0 2rem'}}>
                <h2 style={{paddingTop: '2rem', color: 'green', fontWeight: 'bold'}}>{props.heading}</h2>
                <p>{props.author}</p>
            <article className="all-browsers">
                <article className="blog">
                    <img className='imageStyle' src={img1} alt="" />
                    <h3 style ={h3}>Winter Grain Bowl with Balsamic Dressing</h3>
                    <p style ={{color: 'rgb(116 115 116)', fontSize: '1.1rem'}}>What’s colorful and nutritious and playful and makes your tastebuds feel very alive? This bowl. Roasted root vegetables, earthy grains, and dried fruit. Dark leafy greens, buttery goat cheese, and lusciously creamy balsamic dressing., Cara Cara oranges (and specifically those if you can find them because they are ON POINT), avocado, thinly sliced shallots, a fistful of herbs, a drizzle of light creamy dressing, and grilled lemon chicken.</p>
                </article>
                <article className="blog">
                    <img className='imageStyle' src={img2} alt="" />
                    <h3 style ={h3}>Detox Rainbow Roll-Ups with Peanut Sauce</h3>
                    <p style ={{color: 'rgb(116 115 116)', fontSize: '1.1rem'}}>If Rainbow Roll-Up doesn’t give you some association with a packaged, neon-colored fruit leather situation all wrapped up in a little paper coil, then who are you even? I’m having a moderately hard time separating these from the single greatest snack food of my childhood. 
                    This is not that kind of rainbow roll-up, though. This is a rainbow roll-up that can earn the word DETOX in front of it, thanks to yummy and nutritional powerhouse foods like: carrots. chickpeas. curry. red cabbage. peanuts. dark leafy greens.</p>
                </article>
                <article className="blog">
                    <img className='imageStyle' src={img3} alt="" />
                    <h3 style ={h3}>Winter Spa Salad with Lemon Chicken</h3>
                    <p style ={{color: 'rgb(116 115 116)', fontSize: '1.1rem'}}>Stating the obvious: It’s winter. It’s very, very, very much winter. Like, I’m sitting here looking outside at the snow-covered ground and feeling okay about it because it’s actually a “really nice day” here in Minnesota – we might even get up to 25 degrees. I KNOW, RIGHT? We’re that far gone. Winter has messed with our reasoning abilities. But good news – the cure is coming at you today in the form of a big bowl of *spa salad* loaded with chickpeas, spinach, pomegranates.</p>
                </article>
            </article>
        </div>
    );
};

export default Blog;