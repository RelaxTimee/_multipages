import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            {/* รูปภาพ */}
            <div className="image-container">
                <img
                    src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-1/434095436_1559481131514866_3029314437968100575_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=0X4dEHFnIgQQ7kNvgGk1B4-&_nc_zt=24&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=AEXjxfOzBcIKts-8p14aRAE&oh=00_AYD59sPvEli962LCcOMbg_hmjSIQfGa-rcn5mHoTSiZutw&oe=671DB0B8"
                    alt="Your Profile"
                    className="profile-image"
                />
            </div>

            {/* ข้อมูลแนะนำตัว */}
            <div className="info-container">
                <h1 className="name">ปวิช ปัญญาศุภาพงศ์</h1>
                <p className="student-id">รหัสนักศึกษา: 66070599</p>
                <p className="university"> เรียนอยู่ที่: มหาวิทยาลัยศรีปทุม</p>
                <p className="music">ชอบฟังเพลง: Jazz, Pop, Rap</p>
            </div>
        </div>
    );
}

export default Home;
