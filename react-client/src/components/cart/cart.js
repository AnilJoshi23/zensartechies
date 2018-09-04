import React, { Component } from 'react';

class  cart extends Component {
  render() {
    return (
     
       
<div className="wrapperCart">
     <h1 className="h1value" >Bike Stock</h1>
 <span className="spanCart" ><i className="shopping-cart"></i></span>

    <div className="clear"></div>

    <div className="items">
      
        <div className="itemCart">
            <img src="http://img.tjskl.org.cn/pic/z2577d9d-200x200-1/pinarello_lungavita_2010_single_speed_bike.jpg" alt="item" />
             <h2 className="h2Cart">Item 1</h2>

            <p>Price: <em>$449</em>
            </p>
            <button className="add-to-cart buttonCart" type="button">Add to cart</button>
        </div>
       
        <div className="itemCart">
            <img src="http://img.tjskl.org.cn/pic/z2577d9d-200x200-1/pinarello_lungavita_2010_single_speed_bike.jpg" alt="item" />
             <h2 className="h2Cart"> Item 1</h2>

            <p>Price: <em>$449</em>
            </p>
            <button className="add-to-cart buttonCart" type="button">Add to cart</button>
        </div>
     
        <div className="itemCart">
            <img src="http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg" alt="item" />
             <h2 className="h2Cart">Item 1</h2>

            <p>Price: <em>$449</em>
            </p>
            <button className="add-to-cart buttonCart" type="button">Add to cart</button>
        </div>

         <div className="itemCart">
            <img src="http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg" alt="item" />
             <h2 className="h2Cart">Item 1</h2>

            <p>Price: <em>$889</em>
            </p>
            <button className="add-to-cart buttonCart" type="button">Add to cart</button>
        </div>
    
    
    </div>
    
</div>
      
    );
  }
}

export default cart;