// /api/brands.js
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // اجازه همه دامنه‌ها
  res.setHeader("Access-Control-Allow-Methods", "GET"); // مجاز به این متدها
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    const brands = [
      {
        id: "adidas",
        name: "آدیداس",
        image: "https://www.orglandsports.com/WebsiteImages/Brands/8435978.JPG",
      },
      {
        id: "nike",
        name: "نایک",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/166194024.JPG",
      },
      {
        id: "majid",
        name: "مجید",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/672810107.JPG",
      },
      {
        id: "joma",
        name: "جوما",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/867910152.JPG",
      },
      {
        id: "mizuno",
        name: "میزانو",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/93819344.JPG",
      },
      {
        id: "uhlsport",
        name: "الشپرت",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/956280140.JPG",
      },
      {
        id: "newbalance",
        name: "نیوبالانس",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/697940624.JPG",
      },
      {
        id: "local",
        name: "داخلی",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/132725186.PNG",
      },
      {
        id: "puma",
        name: "پوما",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/637155438.JPG",
      },
      {
        id: "asics",
        name: "اسیکس",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOsmq3xxleCeTd4T43OnaNS0Cx-8RbZA8wA&s",
      },
      {
        id: "umbro",
        name: "آمبرو",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/395136999.JPG",
      },
      {
        id: "fox",
        name: "فوکس",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/262608646.JPG",
      },
      {
        id: "kelme",
        name: "کلمه",
        image:
          "https://www.orglandsports.com/WebsiteImages/Brands/945468594.JPG",
      },
    ];

    res.status(200).json(brands);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
