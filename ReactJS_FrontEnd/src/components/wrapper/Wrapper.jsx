import React from 'react'
import "./style.css"

const Wrapper = () => {
    const data = [
        {
            cover: <i className='fa-solid fa-truck-fast'></i>,
            title: "Giao hàng trên toàn quốc",
            decs: "Chúng tôi cung cấp giá cả cạnh tranh trên 100 triệu sản phẩm cộng với bất kỳ phạm vi nào.",
        },
        {
            cover: <i className='fa-solid fa-id-card'></i>,
            title: "Thanh toán an toàn",
            decs: "Thanh toán nhanh và chính xác từng giây.",
        },
        {
            cover: <i className='fa-solid fa-shield'></i>,
            title: "Tự Tin Mua Sắm ",
            decs: "Các mặt hàng đều chính hãng 100% và được các chuyên gia thẩm định cao.",
        },
        {
            cover: <i className='fa-solid fa-headset'></i>,
            title: "Hỗ Trợ Khách hàng 24/7",
            decs: "Đội ngũ hỗ trợ luôn túc trực bên khách hàng và giải đáp mọi thắc mắc.",
        },
    ]
    return (
        <>
            <section className='wrapper background'>
                <div className='container-grid2'>
                    {data.map((val, index) => {
                        return (
                            <div className='product' key={index}>
                                <div className='img icon-circle'>
                                    <i>{val.cover}</i>
                                </div>
                                <h3>{val.title}</h3>
                                <p>{val.decs}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Wrapper