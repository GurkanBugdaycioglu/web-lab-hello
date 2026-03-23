import './App.css';
function App() {
  return (
    <>
    <a href="#main-content" class="skip-link">
      <p>Ana içeriğe atla</p>
    </a>
    <header>
      <nav aria-label="Ana navigasyon">
        <ul>
          <li><a href="#hakkimda">Hakkimda</a></li>
          <li><a href="#projeler">Projeler</a></li>
          <li><a href="#iletisim">Iletisim</a></li>
        </ul>
      </nav>
    </header>
    <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <p>Merhaba, benim adım Gürkan Buğdaycıoğlu. Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği bölümünde okuyorum.</p>
        </section>
        <section id="projeler">
          <h2>Projelerim</h2>
          <p></p>
        </section>
        <section id="iletisim">
          <h2>Iletisim</h2>
          <p></p>
        </section>
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
    </main>
    <footer>
        <p>&copy; 2026 Gürkan Buğdaycıoğlu. Tüm hakları saklıdır.</p>
    </footer>
    </>
  )
}

export default App