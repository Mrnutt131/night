const mailButton = document.getElementById('mailButton');
const messageBox = document.getElementById('messageBox');
const closeButton = document.getElementById('closeButton');
const body = document.getElementById('body');

// แสดงกล่องจดหมายและเลื่อนปุ่มออกเมื่อคลิก
mailButton.addEventListener('click', () => {
    // เปลี่ยนสีพื้นหลังเป็นน้ำเงินเข้มอมม่วง
    body.style.backgroundColor = '#2c3e50';  // สีที่ต้องการ (น้ำเงินเข้มอมม่วง)
    
    // เลื่อนปุ่ม 💌 ออกไป
    mailButton.classList.add('moved-out');
    
    // แสดงกล่องข้อความ
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.classList.add('show');
    }, 10);
});

// ซ่อนกล่องจดหมายเมื่อกดปุ่มปิด
closeButton.addEventListener('click', () => {
    messageBox.classList.remove('show');
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 500);

    // รีเซ็ตการเลื่อนปุ่มกลับมาที่ตำแหน่งเดิม
    mailButton.classList.remove('moved-out');

    // เปลี่ยนสีพื้นหลังกลับเป็นสีชมพูม่วง
    body.style.backgroundColor = '#D8A7FF'; /* สีชมพูม่วง */
});
