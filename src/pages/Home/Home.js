import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        const wrapper = document.querySelector(`.${cx('wrapper')}`);
        const descriptorsImg = document.querySelector(`.${cx('descriptors')} img`);

        const updateImageWidth = () => {
            if (wrapper.offsetWidth < 1100) {
                descriptorsImg.style.width = `${wrapper.offsetWidth - 100}px`;
            } else {
                descriptorsImg.style.width = '1260px';
            }
        };

        updateImageWidth();

        window.addEventListener('resize', updateImageWidth);

        return () => {
            window.removeEventListener('resize', updateImageWidth);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('box_1')}>
                    <h1>Trường đai học Tài nguyên và môi trường Hà Nội</h1>
                    <p>
                        "Trường Đại học Tài nguyên và Môi trường Hà Nội (Hanoi University of Natural Resources and
                        Environment; viết tắt: HUNRE), là một trường Đại học công lập tại Hà Nội, trực thuộc Bộ Tài
                        nguyên và Môi trường và chịu sự quản lý nhà nước của Bộ Giáo dục và Đào tạo"
                    </p>
                    <p>
                        "Trường đạt chuẩn 4 sao theo định hướng ứng dụng trên hệ thống xếp hạng đối sánh chất lượng đại
                        học UPM (University Performance Metrics)"
                    </p>
                    <p>
                        "Đây là trung tâm nghiên cứu, bồi dưỡng nguồn nhân lực chất lượng cao với trình độ đại học và
                        sau đại học cho các chuyên ngành kinh tế, kỹ thuật, môi trường, khí hậu, biển - hải đảo, trắc
                        địa - bản đồ, đất đai, địa chất, khí tượng, thủy văn,... phục vụ cho lĩnh vực tài nguyên môi
                        trường của đất nước. Trường đang tích cực xây dựng đề án phát triển trở thành trường đại học
                        trọng điểm quốc gia."
                    </p>
                </div>
                <div className={cx('box_2')}>
                    <img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/08/logo-dai-hoc-tai-nguyen-va-moi-truong-ha-noi-1024x1024.png"
                        alt="ảnh"
                    />
                    <p>Trường Đại học Tài nguyên và Môi trường Hà Nội 2010-2024</p>
                </div>
            </div>
            <div className={cx('descriptors')}>
                <img
                    src="https://hunre.edu.vn/media/data/thong-tin/s%E1%BB%A9_m%E1%BA%A1ng_t%E1%BA%A7m_nh%C3%ACn/4e340dbcb3f065ae3ce1.jpg"
                    alt="ảnh"
                />
            </div>
        </div>
    );
}

export default Home;
