import './App.css'
function App() {
  return (
    <>
      <header>
        <div>
          <h1>Web Tasarımı ve Programlama</h1>
          <h2>LAB-1</h2>
          <p>Ad Soyadı: Gürkan Buğdaycıoğlu</p>
          <p>Öğrenci No: 200541048</p>
        </div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
            <figure>
              <img src="profil.jpg"
              alt="Gürkan Buğdaycıoğlu'nun vesikalik fotografi" />
              <figcaption>Gürkan Buğdaycıoğlu</figcaption>
            </figure>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* icerik buraya */}
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
            <form action="#" method="POST" novalidate>
              <fieldset>
                <legend>Iletisim Formu</legend>

                <div class="form-group">
                  <label for="name">Ad Soyad:</label>
                  <input type="text" id="name" name="name"
                  required minlength="2"
                  aria-describedby="name-error" />
                  <small id="name-error" class="error-msg"
                  role="alert"></small>
                </div>
                
                <div class="form-group">
                  <label for="email">E-posta:</label>
                  <input type="email" id="email" name="email"
                  required
                  aria-describedby="email-error" />
                  <small id="email-error" class="error-msg"
                  role="alert"></small>
                </div>
                
                <div class="form-group">
                  <label for="subject">Konu:</label>
                  <select id="subject" name="subject" required
                  aria-describedby="subject-error">
                    <option value="">-- Seciniz--</option>
                    <option value="is">Is Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Oneri</option>
                    </select>
                    <small id="subject-error" class="error-msg"
                    role="alert"></small>
                </div>
                    
                <div class="form-group">
                  <label for="message">Mesajiniz:</label>
                  <textarea id="message" name="message"
                  rows="5" required minlength="10"
                  aria-describedby="message-error">

                  </textarea>
                  <small id="message-error" class="error-msg"
                  role="alert"></small>
                </div>
                    
                <button type="submit">Gonder</button>
              </fieldset>
            </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Gürkan Buğdaycıoğlu. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;