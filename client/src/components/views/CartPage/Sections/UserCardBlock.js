import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <a href={`http://localhost:3000/product/${product._id}`}>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} /></a>
                </td> 
                <td>{product.quantity} </td>
                <td>{product.price} 년 </td>
                <td><button 
                onClick={()=> props.removeItem(product._id)}
                >삭제 </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>문제</th>
                        <th>난이도</th>
                        <th>시험 연도</th>
                        <th>오답노트에서 제거</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
