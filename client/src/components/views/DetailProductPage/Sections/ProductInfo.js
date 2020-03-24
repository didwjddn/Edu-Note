import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import {Stopwatch} from 'hooked-react-stopwatch';
import "hooked-react-stopwatch/css/style.css";

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Stopwatch hideMilliseconds={true} hideHours={true}/>
            <Descriptions title="문제 정보">
                <Descriptions.Item label="시험 연도"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="좋아요">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="조회수"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    MY 오답노트 저장
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
