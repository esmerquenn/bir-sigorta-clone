// scripts.js
const translations = {
  az: {
    individual: "fərdi",
    corporate: "KORPORATİV",
    home: "ANA SƏHİFƏ",
    services: "XİDMƏTLƏR",
    about: "HAQQIMIZDA",
    presentation: "PREZENTASİYA",
    contact: "ƏLAQƏ",
    slide1_title: "Mülkünüzün Dəyərini<br />İcbari Sığorta ilə Qoruyun",
    slide2_title: "Daşınmaz Əmlakınızın <br />İcbari Sığortası Bizimlə",
    slide3_title: "KASKO Sığortasında<br />Etibarlı Tərəfdaşınız",
    apply: "Müraciət et",
    car_insurance: "Avtomobilin icbari sığortası",
    life_insurance: "Həyat sığortası",
    property_insurance: "Əmlak sığortası",
    travel_insurance: "Səyahət sığortası",
    casco_insurance: "KASKO sığorta",
    company_name: "Sığorta",
    about_description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />Accusantium magni labore facere, nisi quod unde ut eveniet quisquam explicabo,<br />laudantium iste corrupti aliquam eos nesciunt asperiores officiis, sapiente assumenda! Assumenda nemo<br />",
    more_info: "Ətraflı",
    satisfied_clients: "Razı müştəri",
    years_experience: "İl təcrübə",
    partners: "Əməkdaş"
  },
  ru: {
    individual: "индивидуальный",
    corporate: "корпоративный",
    home: "Главная",
    services: "Услуги",
    about: "О нас",
    presentation: "Презентация",
    contact: "Контакты",
    slide1_title: "Оценка вашего имущества<br />Защитите обязательное страхование",
    slide2_title: "Обязательное страхование<br />Недвижимости с нами",
    slide3_title: "Ваш надежный партнер<br />в страховании КАСКО",
    apply: "Подать заявку",
    car_insurance: "Обязательное страхование автомобиля",
    life_insurance: "Страхование жизни",
    property_insurance: "Страхование имущества",
    travel_insurance: "Страхование путешествий",
    casco_insurance: "КАСКО страхование",
    company_name: "Сигорта",
    about_description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />Accusantium magni labore facere, nisi quod unde ut eveniet quisquam explicabo,<br />laudantium iste corrupti aliquam eos nesciunt asperiores officiis, sapiente assumenda! Assumenda nemo<br />",
    more_info: "Подробнее",
    satisfied_clients: "Довольные клиенты",
    years_experience: "Лет опыта",
    partners: "Партнеры"
  },
  en: {
    individual: "Individual",
    corporate: "Corporate",
    home: "Home",
    services: "Services",
    about: "About",
    presentation: "Presentation",
    contact: "Contact",
    slide1_title: "Protect Your Property's Value<br />With Mandatory Insurance",
    slide2_title: "Mandatory Insurance<br />For Your Real Estate With Us",
    slide3_title: "Your Reliable Partner<br />in CASCO Insurance",
    apply: "Apply",
    car_insurance: "Car Liability Insurance",
    life_insurance: "Life Insurance",
    property_insurance: "Property Insurance",
    travel_insurance: "Travel Insurance",
    casco_insurance: "CASCO Insurance",
    company_name: "Insurance",
    about_description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />Accusantium magni labore facere, nisi quod unde ut eveniet quisquam explicabo,<br />laudantium iste corrupti aliquam eos nesciunt asperiores officiis, sapiente assumenda! Assumenda nemo<br />",
    more_info: "More Info",
    satisfied_clients: "Satisfied Clients",
    years_experience: "Years of Experience",
    partners: "Partners"
  },
};

function changeLanguage(language) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.innerHTML = translations[language][key];
  });
}
