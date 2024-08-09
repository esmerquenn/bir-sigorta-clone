document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  const content = {
    melumat: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1 class="text-3xl md:text-4xl font-bold text-white">
          <span class="text-4xl md:text-5xl text-[#EA1918]">1</span>sigorta.az
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
    rehberlik: "Bu, Rəhbərlik səhifəsidir.",
    missiya: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
        <h1 class="text-3xl md:text-4xl font-bold text-white">
          <span class="text-4xl md:text-5xl text-[#EA1918]">1</span>sigorta.az
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
            <h1 class="text-3xl md:text-4xl font-bold text-white">
              <span class="text-4xl md:text-5xl text-[#EA1918]">1</span>sigorta.az
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
            <h1 class="text-3xl md:text-4xl font-bold text-white">
              <span class="text-4xl md:text-5xl text-[#EA1918]">1</span>sigorta.az
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
    vakansiya: ` <div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-8">
              <span class="text-4xl md:text-5xl text-[#EA1918]">1</span>sigorta.az
            </h1>
          
            <div class="mb-10">
              <h2 class="text-2xl md:text-3xl font-semibold text-[#EA1918] border-b-2 border-[#EA1918] inline-block pb-1">Sığorta Satış və Müştəri Xidmətləri</h2>
              <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
                <li>Sığorta Agentləri: Müştərilərlə əlaqə qurur və sığorta məhsullarını təqdim edir.</li>
                <li>Müştəri Xidmətləri Meneceri: Müştəri şikayətlərini idarə edir, müştəri məmnuniyyətini artırır və müştəri sorğularını cavablandırır.</li>
              </ul>
            </div>
          
            <div class="mb-10">
              <h2 class="text-2xl md:text-3xl font-semibold text-[#EA1918] border-b-2 border-[#EA1918] inline-block pb-1">Maliyyə və İqtisadiyyat</h2>
              <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
                <li>Maliyyə Analitiki: Saytın maliyyə vəziyyətini təhlil edir, büdcə hazırlayır və maliyyə hesabatları təqdim edir.</li>
                <li>Maliyyə Meneceri: Saytın maliyyə strategiyalarını planlaşdırır və icra edir.</li>
              </ul>
            </div>
          
            <div class="mb-10">
              <h2 class="text-2xl md:text-3xl font-semibold text-[#EA1918] border-b-2 border-[#EA1918] inline-block pb-1">İnformasiya Texnologiyaları (İT)</h2>
              <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
                <li>İT Dəstək Mütəxəssisi: Saytın İT sistemlərini dəstəkləyir və texniki problemləri həll edir.</li>
                <li>Sistem İnkişafçısı: Saytın proqram təminatını inkişaf etdirir və mövcud sistemləri təkmilləşdirir.</li>
              </ul>
            </div>
          
            <div class="mb-10">
              <h2 class="text-2xl md:text-3xl font-semibold text-[#EA1918] border-b-2 border-[#EA1918] inline-block pb-1">Marketinq və Kommunikasiya</h2>
              <ul class="mt-4 md:text-[1.2rem] text-white list-disc pl-5">
                <li>Marketinq Meneceri: Saytın marketinq strategiyalarını hazırlayır və icra edir, reklam və tanıtım fəaliyyətlərini həyata keçirir.</li>
                <li>Kommunikasiya Mütəxəssisi: Sayt ilə müştərilər və ictimaiyyət arasında effektiv kommunikasiya qurur.</li>
              </ul>
            </div>
          </div>`,
    sual: `<div class="container md:w-[80%] mx-auto py-10 px-5 md:px-20">
  <h1 class="text-3xl md:text-4xl font-bold text-white">
   Ən Çox Verilən Suallar
  </h1>

  <div class="mt-5 md:text-[1.2rem] text-white">
    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Sığorta Nədir?</h3>
      <p>
        Sığorta, risklərin başqasına ötürüldüyü və ya başqası ilə bölüşdürüldüyü bir mexanizmdir. Sığorta, hər hansı bir itkiyə məruz qalmış şəxsi, itkiyə səbəb olmuş hadisədən əvvəlki maliyyə vəziyyətinə qaytarmaq üçün təzminatla təmin edir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Sığorta Müqaviləsi Nədir?</h3>
      <p>
        Sığorta müqaviləsi, sığortalı ilə sığortaçı arasında əldə edilən bir razılaşmadır. Bu razılaşmaya görə, sığortalı sığorta haqqını ödəməyi, sığortaçı isə göstərilən itkilər baş verdikdə zərəri — sığorta ödənişini ödəməyi öz üzərinə götürür.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Sığorta Haqqı Nədir?</h3>
      <p>
        Sığorta haqqı, sığorta müqaviləsində nəzərdə tutulmuş vaxtda və qaydada sığorta şirkətinə ödədiyiniz pul məbləğidir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Sığortaçı Kimdir?</h3>
      <p>
        Sığortaçı, sığorta fəaliyyətini həyata keçirən sığorta şirkətidir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Sığortalı Kimdir?</h3>
      <p>
        Sığortalı, sığorta müqaviləsi əsasında öz həyatını, sağlamlığını, əmlakını, məsuliyyətini sığorta etdirən və bunun qarşılığında sığortaçıya müəyyən məbləğ (sığorta haqqı) ödəyən şəxsdir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Franşiza Nədir və O, Sığorta Haqqına Necə Təsir Edir?</h3>
      <p>
        Franşiza, sığorta hadisəsi baş verdiyi zaman dəymiş zərərin sığorta ilə təmin olunmayan və sizin tərəfinizdən ödənilməli olan hissəsidir. Tez-tez sığortaçıya müraciət etmədən də özünüzün ödəyə biləcəyiniz xırda zərərlərlə qarşılaşa bilərsiniz. Belə hallar üçün sığorta müqaviləsində azadolma məbləği nəzərdə tutulur. Sığorta hadisəsi nəticəsində dəymiş zərərin azadolma məbləğindən artıq hissəsi sığortaçı tərəfdən ödənilir.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Avtomobil Sığortası Hansı Riskləri Əhatə Edir?</h3>
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
      <h3 class="text-2xl font-semibold mb-2">Avtomobilimi Sığorta Edərkən Avtomobilin Qiyməti Necə Müəyyən Olunur?</h3>
      <p>
        Avtomobilinizin sığortalanması zamanı onun bazar qiyməti əsas götürülür.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Avtomobil Sığortası Zamanı Müqavilə Hansı Müddətə Bağlanılır?</h3>
      <p>
        Adətən sığorta müqaviləsi 1 il müddətinə bağlanılır.
      </p>
    </article>

    <article class="mb-6">
      <h3 class="text-2xl font-semibold mb-2">Etibarnamə Əsasında İdarə Etdiyim Avtomobili Sığorta Edə Bilərəmmi?</h3>
      <p>
        Bəli, siz etibarnamə əsasında idarə etdiyiniz avtomobili sığorta etdirə bilərsiniz.
      </p>
    </article>
  </div>
</div>

`,
  };
  const images = {
    melumat: "lmelumat.jpg",
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
