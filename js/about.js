document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  const content = {
    melumat: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1 class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
   Məlumat
  </h1>
        <p class="mt-5 md:text-[1.2rem] text-white">
          www.1sigorta.az saytı 19.07.2024-cü il tarixində Mircəfər Mirəli oğlu Cəfərov tərəfindən təsis edilmiş, Azərbaycan
          Respublikası Mərkəzi Bankı tərəfindən verilmiş SA – 0337 saylı lisenziya əsasında sayt üzərindən sığorta fəaliyyətinə
          başlanmışdır. Saytın təsis edilməsində məqsəd sığorta şirkətləri ilə müştərilər arasında sığorta vasitəçiliyi etməklə
          asan, operativ və peşəkar xidmət göstərməkdir. Əsas üstünlüyümüz Azərbaycanda fəaliyyət göstərən sığorta şirkətlərinin
          20-dən artıq sığorta məhsullarını müştərilərə təqdim etmək və satışını həyata keçirmək imkanını yaratmaqdır.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Saytımızın 17 ilə yaxın sığorta sahəsində peşəkar iş təcrübəsinə malik olan əməkdaşları vardır. Peşəkarlar tərəfindən
          professional şəkildə hazırlanmış saytımız sizin vaxtınıza və enerjinizə qənaət etməyinizə kömək edəcək. Hər birinizə
          sığortalı həyat arzulayırıq.
        </p>
      </div>`,
    rehberlik: `<div class=" bg-slate-50 dark:bg-gray-900 container md:w-[80%]  mx-auto py-10 px-5 md:px-20">
  <h1 class="text-2xl font-semibold border-b-4 pb-3 border-red-600 text-center text-gray-900 dark:text-white mb-8">
    Mircəfər Mirəli oğlu Cəfərov – <span class="text-2xl md:text-3xl text-[#EA1918]">1</span>sigorta.az saytının təsisçisi
   
  </h1>

  <div class="md:flex md:items-start">
    <div class="md:w-1/3 mb-6 md:mb-0">
      <img src="./../assets/img/admin.jpg" alt="Mircəfər Cəfərov" class="w-full h-auto rounded">
    </div>
    <div class="md:w-2/3 md:pl-10">
      <p class="text-lg text-gray-800 leading-8 dark:text-gray-400">
        Mircəfər Cəfərov 28.06.1987-ci ildə Quba şəhərində anadan olmuşdur. Orta təhsilini Quba Özəl Türk Liseyindən almışdır.
        2010-cu ildə Azərbaycan Dövlət İqtisad Universitetinin Beynəlxalq İqtisadi Münasibətlər fakültəsini bitirmişdir. Əmək
        fəaliyyətinə 2007-ci ildə “Damirbank” ASC-də başlamışdır. 2011-ci ildən əmək fəaliyyətini “AXA MBASK” SŞ-də davam
        etdirmişdir. 2017-ci ilin yanvar ayında “MeqaSığorta” ASC-nin Şimal bölgəsinin rəhbəri vəzifəsində çalışmışdır.
        2017-ci ilin iyun ayında “AtaSığorta” ASC-nin İçəri Şəhər filialının müdiri vəzifəsinə təyin edilmişdir.
      </p>
    </div>
  </div>
</div>

`,
    missiya: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1 class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Missiya
  </h1>
        <p class="mt-5 md:text-[1.2rem] text-white">
          www.1sigorta.az saytı müasir texnologiyalara əsaslanmaqla keyfiyyətli və etibarlı universal sığorta xidmətləri göstərən
          güvənli və ictimai əhəmiyyətli vasitəçi sayt olmağı özünün strateji baxışı hesab edir.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Keyfiyyət siyasəti olaraq müştərilərin sığorta məhsulu seçimində mümkün qədər bir neçə sığorta şirkətinin arasında az
          itki olmağı düzgün seçim etməsində vasitəçi olur.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Müştərilərin ehtiyaclarını qarşılamaq, onlara mükəmməl xidmət göstərmək və onların sığorta tələblərinə cavab vermək.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Müştərilərin maliyyə risklərini minimuma endirmək və onlara müxtəlif növ sığorta məhsulları ilə təhlükəsizlik təmin
          etmək.
        </p>

        <p class="mt-3 md:text-[1.2rem] text-white">
          Yenilikçi sığorta məhsulları və xidmətləri təqdim edərək bazar tələblərinə uyğunlaşmaq.
        </p>
      </div>`,
    biznes: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
            <h1 class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Biznesə yanaşma
  </h1>
            <p class="mt-5 md:text-[1.2rem] text-white">
              www.1sigorta.az saytının biznesə yanaşması, bazarda uğur qazanmaq, müştəri bazasını genişləndirmək və effektiv fəaliyyət göstərmək üçün tətbiq etdiyi strategiyaları əhatə edir. 1sigorta.az saytı üçün biznes yanaşması aşağıdakı əsas aspektləri əhatə edir:
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Müştərilərin fərdi ehtiyaclarını müəyyən etmək və uyğun sığorta məhsulları təqdim etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Yüksək keyfiyyətli müştəri xidmətləri ilə müştəri məmnuniyyətini artırmaq.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Riskləri dəqiq qiymətləndirmək və uyğun sığorta həlləri təklif etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Riskləri idarə etmək üçün dəqiq prosedur və alqoritmlər hazırlamaq.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Müasir texnologiyalardan istifadə edərək əməliyyatları optimallaşdırmaq və müştəri təcrübəsini yaxşılaşdırmaq.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sığorta məhsullarını online platformalar vasitəsilə təqdim etmək və müştəri interfeyslərini inkişaf etdirmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Saytın maliyyə resurslarını səmərəli idarə etmək və maliyyə risklərini minimuma endirmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Adeqvat sığorta təminatları ilə müştərilərə xidmət etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sığorta bazarını və müştəri tələblərini tədqiq etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Rəqiblərin fəaliyyətini analiz edərək müştəri cəlb etmək üçün fərqlənən strategiyalar tətbiq etmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sayt əməkdaşlarının peşəkar bacarıqlarını artırmaq üçün təlimlər keçirmək.
            </p>
          
            <p class="mt-3 md:text-[1.2rem] text-white">
              Sığorta sahəsindəki yenilikləri və trendleri əməkdaşlara çatdırmaq.
            </p>
          </div>`,
    qanunvericilik: `<div class="container mx-auto py-10 px-5 md:px-20">
           <h1 class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Qanun vericilik
  </h1>
            <p class="mt-5 md:text-[1.2rem] text-white">
              Qanunvericilik
            </p>
            
            <ul class="mt-2 md:text-[1.2rem] text-white list-disc pl-5">
              <li>Azərbaycan Respublikasının Mülki Məcəlləsi</li>
              <li>“Sığorta fəaliyyəti haqqında” Azərbaycan Respublikasının Qanunu</li>
              <li>İcbari Sığortalar haqqında Azərbaycan Respublikasının Qanunu</li>
              <li>Tibbi Sığorta haqqında Azərbaycan Respublikasının Qanunu</li>
              <li>İstehsalatda bədbəxt hadisələr və peşə xəstəlikləri nəticəsində peşə əmək qabiliyyətinin itirilməsi hallarından icbari sığorta haqqında Azərbaycan Respublikasının Qanunu</li>
              <li>Auditorun peşə məsuliyyətinin icbari sığortası haqqında Azərbaycan Respublikasının Qanunu</li>
              <li>Fiziki şəxslərə təqdim edilən avtomobil nəqliyyatı vasitələrinin tam sığortası üzrə sığorta qaydaları</li>
            </ul>
          </div>`,
    vakansiya: `<div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
   <h1 class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Vakansiyalar
  </h1>

  <div class="mb-10">
    <h2 class="text-2xl md:text-3xl font-semibold text-white mb-2">Sığorta Satış və Müştəri Xidmətləri</h2>
    <div class="h-1 bg-[#EA1918] w-full mb-4"></div>
    <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
      <li>Sığorta Agentləri: Müştərilərlə əlaqə qurur və sığorta məhsullarını təqdim edir.</li>
      <li>Müştəri Xidmətləri Meneceri: Müştəri şikayətlərini idarə edir, müştəri məmnuniyyətini artırır və müştəri sorğularını cavablandırır.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-3xl font-semibold text-white mb-2">Maliyyə və İqtisadiyyat</h2>
    <div class="h-1 bg-[#EA1918] w-full mb-4"></div>
    <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
      <li>Maliyyə Analitiki: Saytın maliyyə vəziyyətini təhlil edir, büdcə hazırlayır və maliyyə hesabatları təqdim edir.</li>
      <li>Maliyyə Meneceri: Saytın maliyyə strategiyalarını planlaşdırır və icra edir.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-3xl font-semibold text-white mb-2">İnformasiya Texnologiyaları (İT)</h2>
    <div class="h-1 bg-[#EA1918] w-full mb-4"></div>
    <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
      <li>İT Dəstək Mütəxəssisi: Saytın İT sistemlərini dəstəkləyir və texniki problemləri həll edir.</li>
      <li>Sistem İnkişafçısı: Saytın proqram təminatını inkişaf etdirir və mövcud sistemləri təkmilləşdirir.</li>
    </ul>
  </div>

  <div class="mb-10">
    <h2 class="text-2xl md:text-3xl font-semibold text-white mb-2">Marketinq və Kommunikasiya</h2>
    <div class="h-1 bg-[#EA1918] w-full mb-4"></div>
    <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
      <li>Marketinq Meneceri: Saytın marketinq strategiyalarını hazırlayır və icra edir, reklam və tanıtım fəaliyyətlərini həyata keçirir.</li>
      <li>Kommunikasiya Mütəxəssisi: Sayt ilə müştərilər və ictimaiyyət arasında effektiv kommunikasiya qurur.</li>
    </ul>
  </div>
</div>
`,
    sual: `<div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
  <h1 class="text-3xl md:text-4xl font-bold text-[#f0f0f0] dark:text-gray-300 mb-8">
    Ən Çox Verilən Suallar
  </h1>

  <div class="mt-5 md:text-[1.2rem] text-[#f0f0f0] dark:text-gray-400">
    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Sığorta Nədir?</h3>
      <p>
        Sığorta, risklərin başqasına ötürüldüyü və ya başqası ilə bölüşdürüldüyü bir mexanizmdir. Sığorta, hər hansı bir itkiyə məruz qalmış şəxsi, itkiyə səbəb olmuş hadisədən əvvəlki maliyyə vəziyyətinə qaytarmaq üçün təzminatla təmin edir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Sığorta Müqaviləsi Nədir?</h3>
      <p>
        Sığorta müqaviləsi, sığortalı ilə sığortaçı arasında əldə edilən bir razılaşmadır. Bu razılaşmaya görə, sığortalı sığorta haqqını ödəməyi, sığortaçı isə göstərilən itkilər baş verdikdə zərəri — sığorta ödənişini ödəməyi öz üzərinə götürür.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Sığorta Haqqı Nədir?</h3>
      <p>
        Sığorta haqqı, sığorta müqaviləsində nəzərdə tutulmuş vaxtda və qaydada sığorta şirkətinə ödədiyiniz pul məbləğidir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Sığortaçı Kimdir?</h3>
      <p>
        Sığortaçı, sığorta fəaliyyətini həyata keçirən sığorta şirkətidir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Sığortalı Kimdir?</h3>
      <p>
        Sığortalı, sığorta müqaviləsi əsasında öz həyatını, sağlamlığını, əmlakını, məsuliyyətini sığorta etdirən və bunun qarşılığında sığortaçıya müəyyən məbləğ (sığorta haqqı) ödəyən şəxsdir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Franşiza Nədir və O, Sığorta Haqqına Necə Təsir Edir?</h3>
      <p>
        Franşiza, sığorta hadisəsi baş verdiyi zaman dəymiş zərərin sığorta ilə təmin olunmayan və sizin tərəfinizdən ödənilməli olan hissəsidir. Tez-tez sığortaçıya müraciət etmədən də özünüzün ödəyə biləcəyiniz xırda zərərlərlə qarşılaşa bilərsiniz. Belə hallar üçün sığorta müqaviləsində azadolma məbləği nəzərdə tutulur. Sığorta hadisəsi nəticəsində dəymiş zərərin azadolma məbləğindən artıq hissəsi sığortaçı tərəfdən ödənilir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Avtomobil Sığortası Hansı Riskləri Əhatə Edir?</h3>
      <p>
        Avtomobilinizi sığortalayarkən, siz təklif olunan üç təminat növündən hər hansı birini və ya hər üçünü seçə bilərsiniz:
      </p>
      <ul class="list-disc list-inside pl-4">
        <li>Avtomobilin sığortası - Avtomobilinizə dəyən zərərin ödənilməsi (yol-nəqliyyatı hadisəsi, yanğın, partlayış, üçüncü şəxslərin qərəzli hərəkətləri, oğurluq və s.).</li>
        <li>Sizin və sərnişinlərin sağlamlığına dəyən zərərin ödənilməsi - Avtomobildə olan sərnişinlərin sağlamlığına dəyən zərərin ödənilməsi.</li>
        <li>Mülki məsuliyyətin sığortası - Sizin səhviniz nəticəsində ətrafdakılara dəyən zərərin sığortaçı tərəfindən ödənilməsi.</li>
      </ul>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Avtomobilimi Sığorta Edərkən Avtomobilin Qiyməti Necə Müəyyən Olunur?</h3>
      <p>
        Avtomobilinizin sığortalanması zamanı onun bazar qiyməti əsas götürülür.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Avtomobil Sığortası Zamanı Müqavilə Hansı Müddətə Bağlanılır?</h3>
      <p>
        Adətən sığorta müqaviləsi 1 il müddətinə bağlanılır.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2 text-[#f0f0f0] dark:text-gray-300">Etibarnamə Əsasında İdarə Etdiyim Avtomobili Sığorta Edə Bilərəmmi?</h3>
      <p>
        Bəli, siz etibarnamə əsasında idarə etdiyiniz avtomobili sığorta etdirə bilərsiniz.
      </p>
    </article>
  </div>
</div>

`,
  };
  const images = {
    melumat: "melumat.jpg",
    rehberlik: "Bu, Rəhbərlik səhifəsidir.",
    missiya: "mission.jpg",
    biznes: "biznes.webp",
    qanunvericilik: "korporativ.jpg",
    vakansiya: "about_us.jpg",
    sual: "sual3.jpg",
  };
  let defaultImg = "biznes.webp";
  document.getElementById("content").innerHTML = content[page] || "Səhifə tapılmadı.";
  document.querySelector(
    "main"
  ).style.background = ` linear-gradient(rgba(3, 1, 48, 0.605), rgba(3, 1, 48, 0.605)), url(./../assets/img/${
    images[page] || defaultImg
  }) center/cover`;
});
