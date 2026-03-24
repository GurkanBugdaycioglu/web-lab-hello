 # CSS Kararlari

## 1. Breakpoint Secimi
- Neden 640px ve 1024px sectim?
Performans, içerik önceliği ve herkese temel deneyim sunmak amaçlı olarak bu genişlikleri seçtim.
- Icerigim bu noktalarda nasil degisiyor?
İçeriğim bu noktada mobil, tablet ve bilgisayar ortamlarının hepsini destekleyen yönde değişiyor.

## 2. Layout Tercihleri
- Header icin neden Flexbox sectim?
Flexbox eksen boyunca hizalamayı sağlar o yüzden Flexbox seçtim.
- Proje kartlari icin neden Grid sectim?
Grid kartları satır ve sütun olarak birlikte düzenlememi sağladığı için.
- auto-fit mi auto-fill mi kullandim, neden?
auto-fit kullandım çünkü auto-fit'in işlevi daha çok hoşuma gitti.

## 3. Design Tokens
- Hangi renk paletini sectim ve neden?
Gri'nin tonlarını seçtim çünkü renk düzenine fazla zaman harcamak istemedim ve grinin tonlarıyla istediğim bir görünüş elde etmek çok daha kolaydı.
- Spacing skalasini nasil belirledim?
0.25rem ile 4rem arası spacing skalasını kullandım çünkü bu basit ve çok kullanılan bir skaladır.
- Fluid typography icin clamp degerlerini nasil ayarladim?
Yazı boyutları, ekran genişliğine göre dinamik olarak değişen clamp() fonksiyonu ile ayarladım.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini nasil uyguladim?
Öncelikle mobil stilleri tanımladım ondan sonra diğer stilleri tanımladım. Böylece kullanıcılar ilk mobil sayfa stilini indireceği için interneti yavaş mobil cihazlarda daha yüksek performansa sahip olacak.
- Hangi elemanlar breakpoint'lerde degisiyor?
Header'ın flex-direction'ı, navigasyon listesinin dizilimi, proje kartlarının sütun sayısı, paddingleri ve hakkımda bölümünü breakpoint'lerde değişiyor.
- Gorsel boyutlari nasil yonettim?
Görsel boyutları yatay düzende tam genişlikte olup yüksekliğinin ona göre otomatik ayarlandığı bir düzende yönettim.