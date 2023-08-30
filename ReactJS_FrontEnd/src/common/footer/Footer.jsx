import React from 'react'
import "./style.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container-grid2'>
                    <div className='box'>
                        <h1>Nước Hoa Nhập</h1>
                        <p>Những mẫu nước hoa nổi tiếng và đượcưa chuộng nhất trên thế giới với giá cả hợp lý với túi tiền của người VIệt Nam. Shop luôn muốn sự hài lòng của khách hàng khi dùng nước hoa </p>
                        <div className='icon d_flex'>
                            <div className='img d_flex'>
                                <i class='fa-brands fa-google-play'></i>
                                <span>Google Play</span>
                            </div>
                            <div className='img d_flex'>
                                <i className='fa-brands fa-app-store-ios'></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <h2>Chúng Tôi</h2>
                        <ul>
                            <li>Nghề Nghiệp</li>
                            <li>Cửa Hàng</li>
                            <li>Sự Quan Tâm</li>
                            <li>Điều Khoản & Điều Kiện</li>
                            <li>Chính Sách Bảo Mật</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Chăm Sóc Khách Hàng</h2>
                        <ul>
                            <li>Trung Tâm Hỗ Trợ</li>
                            <li>Cách thức Mua</li>
                            <li>Theo dõi Đơn Hàng</li>
                            <li>Mua hàng số lượng lớn & doanh nghiệp</li>
                            <li>Trả lại & Hoàn tiền</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Thông Tin Liên Hệ</h2>
                        <ul>
                            <li>70 Washington Square South, New York, NY 10012, United States </li>
                            <li>Email: uilib.help@gmail.com</li>
                            <li>Phone: +1 1123 456 780</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer