// src/data.ts

export const products = [
  {
    id: 1,
    name: 'มัทฉะลาเต้ (Matcha Latte)',
    desc: 'มัทฉะคุณภาพพรีเมียมผสมกับนมสดรสชาติเข้มข้น หอมกลิ่นมัทฉะแท้ๆ',
    price: 80,
    image: '/picture/menu1.jpg'
  },
  {
    id: 2,
    name: 'มัทฉะยูซุ (Matcha Yuzu)',
    desc: 'มัทฉะรสชาติเข้มข้นผสมกับน้ำส้มยูซุ ให้รสชาติเปรี้ยวอมหวาน',
    price: 90,
    image: '/picture/menu2.jpg'
  },
  {
    id: 3,
    name: 'มัทฉะดาร์กโกโก้ (Matcha Dark Cocoa)',
    desc: 'มัทฉะเข้มข้นผสมผสานกับดาร์กโกโก้รสชาติลงตัว',
    price: 95,
    image: '/picture/menu3.jpg'
  },
  {
    id: 4,
    name: 'ชาเขียวปั่นโอริโอ้',
    desc: 'ชาเขียวปั่นเนื้อเนียนละเอียด ผสมกับคุกกี้โอริโอ้',
    price: 95,
    image: '/picture/OIG3.jpg'
  },
  {
    id: 5,
    name: 'ชาเขียววานิลลา',
    desc: 'เครื่องดื่มที่ผสมผสานความหอมละมุนของวานิลลา',
    price: 90,
    image: '/picture/OIG1.jpg'
  },
  {
    id: 6,
    name: 'ชาเขียวนมสด',
    desc: 'เครื่องดื่มที่ผสมผสานความหอมของชาเขียวเข้ากับความมันของนมสด',
    price: 70,
    image: '/picture/OIG2.jpg'
  },
  {
    id: 7,
    name: 'มัทฉะชีสเค้ก',
    desc: 'ชีสเค้กเนื้อเนียนนุ่ม หอมกลิ่นมัทฉะแท้ๆ',
    price: 120,
    image: '/picture/menu4.jpg'
  },
  {
    id: 8,
    name: 'มัทฉะไอศกรีม',
    desc: 'ไอศกรีมมัทฉะรสชาติเข้มข้น หอมหวานเย็นชื่นใจ',
    price: 85,
    image: '/picture/menu5.jpg'
  },
  {
    id: 9,
    name: 'มัทฉะดังโงะ',
    desc: 'ดังโงะเนื้อหนึบหนับ ราดด้วยซอสมัทฉะเข้มข้น',
    price: 90,
    image: '/picture/menu6.jpg'
  }
];

export const teamMembers = [
  {
    id: 1,
    studentId: '67141977',
    name: 'นาย วรกันต์ รื่นพิทักษ์',
    contact: 'Line @charifkub1122',
    role: 'Full Stack Developer',
    image: 'https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/404396776_1868994070218053_8125433832572033148_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4fx6fm_iyYFkrqRuXPVCgRGqcTHEykspEapxMcTKSypEuwaTZyWX1m9R7TaItq8L4vxUUM0x3qtibzO8ULHzd&_nc_ohc=HpI8g0GVFrgQ7kNvgGrGGZC&_nc_oc=Adie63-302pInk6ETL8R2ck1ioQMv0bt3Qa0kQ7hbDbigO9YgsMu0eGHeR5LjOU2RQi1-NB9FllHfuuf0UvHPqBR&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=WTjE4HXb_ewiqJZ6x_PtFw&oh=00_AYGYRbBLsxRG0fmow799rB6wnUpL2xD3kQsKAptRueXfxg&oe=67DACA55'
  }
];

export const blogs = [
  {
    id: 1,
    title: 'จับคู่มัทฉะกับอาหารอย่างไรให้รสชาติลงตัว',
    desc: 'ในปี พ.ศ. 2568 กระแสความนิยมของมัทฉะยังคงเติบโตอย่างต่อเนื่อง และมีการผสมผสานมัทฉะเข้ากับอาหาร...',
    img: 'https://t1.blockdit.com/photos/2025/03/67cafcb082792013f25e5a59_800x0xcover_qDr2bHuT.jpg',
    link: 'https://www.blockdit.com/posts/67caff68ba17e60e88b4a452'
  },
  {
    id: 2,
    title: 'ชาเขียวกับมัทฉะ ต่างกันอย่างไร',
    desc: 'ชาเขียว และ มัทฉะ ถือเป็นเครื่องดื่มยอดนิยมที่มีต้นกำเนิดจากใบชาชนิดเดียวกัน แต่กระบวนการผลิตแตกต่างกัน...',
    img: 'https://t1.blockdit.com/photos/2024/10/671c8cc62cdf7b5c1986ccf7_800x0xcover_ZopwyJaT.jpg',
    link: 'https://www.blockdit.com/posts/671c8eba2cdf7b5c1988af17'
  },
  {
    id: 3,
    title: 'ดื่มมัทฉะอย่างไรให้ได้ประโยชน์สูงสุด',
    desc: 'หากต้องการดื่มมัทฉะให้ได้รับประโยชน์สูงสุด มีเคล็ดลับและแนวทางดังนี้...',
    img: 'https://t1.blockdit.com/photos/2025/03/67cb05f70c390533e9b4c195_800x0xcover_DZECTxKG.jpg',
    link: 'https://www.blockdit.com/posts/67cb078a557e329d8742b1bb'
  },
  {
    id: 4,
    title: 'ทำไมมัทฉะถึงเป็นทางเลือกที่ดีหากต้องการลดกาแฟ',
    desc: 'มัทฉะช่วยลดอาการปวดศีรษะจากการถอนคาเฟอีนได้ และยังมีประโยชน์อื่นๆ อีกมากมาย...',
    img: 'https://t1.blockdit.com/photos/2025/03/67cb16a1557e329d874cd46d_800x0xcover_SaF2478I.jpg',
    link: 'https://www.blockdit.com/posts/67cb180de28254216c16600e'
  },
  {
    id: 5,
    title: 'มัทฉะแต่ละเกรดต่างกันอย่างไร',
    desc: 'มัทฉะแต่ละเกรดมีความแตกต่างกันในด้านคุณภาพ รสชาติ และวิธีการใช้งาน...',
    img: 'https://t1.blockdit.com/photos/2025/03/67cd9ab6a661042cfaf8a175_800x0xcover_JGvdDjeM.jpg',
    link: 'https://www.blockdit.com/posts/67cd9d3fa661042cfafa0efe'
  },
  {
    id: 6,
    title: 'ทำไมมัทฉะถึงกลายเป็นหนึ่งในวัฒนธรรมของญี่ปุ่น',
    desc: 'มัทฉะได้กลายเป็นส่วนหนึ่งของวัฒนธรรมญี่ปุ่นอย่างลึกซึ้ง โดยมีรากฐานมาจากประวัติศาสตร์อันยาวนาน...',
    img: 'https://t1.blockdit.com/photos/2025/03/67cda3dba661042cfafd505f_800x0xcover_DEYDT_U-.jpg',
    link: 'https://www.blockdit.com/posts/67cda63a93dd6e70d2b51256'
  },
  {
    id: 7,
    title: 'ประโยชน์ของมัทฉะสำหรับเด็กและวัยรุ่น',
    desc: 'มัทฉะเป็นเครื่องดื่มที่น่าสนใจสำหรับเด็กและวัยรุ่น เพราะมีประโยชน์หลายอย่างที่ตอบโจทย์วัยเรียน...',
    img: 'https://t1.blockdit.com/photos/2025/03/67cdaec084843416c107d134_800x0xcover_-VWGNzdZ.jpg',
    link: 'https://www.blockdit.com/posts/67cdb12d3e3336e227fdf9d7'
  }
];