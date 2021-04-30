import React from 'react';
import Item from './item';

function List(props) {//props son propied. o atrib. q conocemos en las etiquetas
    return (
        <div className="list">
            {
                props.items.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating} />
                )
            }
        </div>
    );
}

export default List;