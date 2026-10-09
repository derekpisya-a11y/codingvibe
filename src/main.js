import '@fontsource-variable/manrope';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import './style.css';

const icons = {
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  sparkles: '<path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3Zm7-1v4m-2-2h4M4 18v4m-2-2h4"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  cup: '<path d="M4 8h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm13 1h2a3 3 0 0 1 0 6h-2M7 3v2m5-2v2M2 22h18"/>',
  moon: '<path d="M20.6 14.1A9 9 0 0 1 9.9 3.4 9 9 0 1 0 20.6 14.1Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sparkles}</svg>`;
const flower = (cls = '') => `<svg class="flower ${cls}" viewBox="0 0 64 64" aria-hidden="true"><g fill="currentColor"><ellipse cx="32" cy="18" rx="10" ry="16"/><ellipse cx="32" cy="46" rx="10" ry="16"/><ellipse cx="18" cy="32" rx="16" ry="10"/><ellipse cx="46" cy="32" rx="16" ry="10"/></g><circle cx="32" cy="32" r="8" fill="var(--cream)"/></svg>`;

const imageUrl = filename => globalThis.__KOMOREBI_IMAGES__?.[filename] || `${import.meta.env.BASE_URL}images/${filename}`;

const characters = [
  { id: 'sakura', name: 'Сакура', japanese: 'さくら', subtitle: 'Та, что замечает прекрасное', category: 'tender', tag: 'Нежность', color: 'pink', icon: 'sun', image: 'portrait-sakura.webp', detail: 'Сакура собирает лепестки между страницами книг и фотографирует небо на плёнку. Она верит, что самые важные вещи говорят тихо: чашка чая, записка от друга, первый цветок после зимы. Рядом с ней даже обычная прогулка становится маленькой историей.', quote: '«Сегодня обязательно случится что-то хорошее. Даже если это просто вкусный чай».', likes: ['Цветение сакуры', 'Плёночные фото', 'Клубничное моти'], hobby: 'Находит красоту в мелочах', age: 22 },
  { id: 'yuki', name: 'Юки', japanese: 'ゆき', subtitle: 'Тихие мечты под звёздами', category: 'dream', tag: 'Мечты', color: 'lavender', icon: 'moon', image: 'portrait-yuki.webp', detail: 'Юки иллюстрирует детские книги и знает названия почти всех созвездий. В её блокноте живут летающие киты, облачные города и списки мест, куда она однажды отправится. Она немного застенчива, но с близкими может всю ночь говорить о космосе.', quote: '«Не все мечты должны быть большими. Иногда достаточно увидеть падающую звезду».', likes: ['Звёздное небо', 'Акварель', 'Черничный чай'], hobby: 'Рисует свои маленькие вселенные', age: 23 },
  { id: 'hana', name: 'Хана', japanese: 'はな', subtitle: 'Счастье с ароматом матча', category: 'cozy', tag: 'Уют', color: 'sage', icon: 'cup', image: 'portrait-hana.webp', detail: 'Хана работает в маленькой цветочной мастерской, где всегда пахнет эвкалиптом и свежей выпечкой. Она выращивает травы на подоконнике, вяжет шарфы для друзей и готовит самый нежный матча-латте. Её суперсила — превращать любое место в дом.', quote: '«Ты уже многое сделал. Давай теперь просто посидим рядом и отдохнём».', likes: ['Матча-латте', 'Комнатные растения', 'Дождь за окном'], hobby: 'Создаёт уют, которым хочется делиться', age: 24 },
  { id: 'aoi', name: 'Аой', japanese: 'あおい', subtitle: 'Навстречу ветру и чудесам', category: 'adventure', tag: 'Приключения', color: 'peach', icon: 'sparkles', image: 'portrait-aoi.webp', detail: 'Аой никогда не выходит из дома без скетчбука и удобных кроссовок. Она любит потеряться в незнакомом городе, найти крошечную пекарню и подружиться с её хозяином. Каждое воскресенье — новый маршрут, новая мелодия и ещё одна история для друзей.', quote: '«А что, если свернуть на ту улочку? Вдруг там начинается наше новое приключение».', likes: ['Поездки на поезде', 'Морской ветер', 'Булочки с корицей'], hobby: 'Коллекционирует счастливые случайности', age: 21 },
];
const storageKey = 'komorebi-favorites-v1';
let favorites;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  favorites = new Set(Array.isArray(saved) ? saved.filter(id => characters.some(c => c.id === id)) : []);
} catch { favorites = new Set(); }
let category = 'all';
let onlyFavorites = false;
let query = '';
let activeCharacter = null;
let dialogTrigger = null;
let toastTimer;

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#characters">Перейти к персонажам</a>
  <header class="header">
    <div class="container header-inner">
      <a class="brand" href="#home" aria-label="Komorebi — на главную">${flower()}<span>komorebi<span class="brand-caption">a little anime haven</span></span></a>
      <nav class="nav" aria-label="Основная навигация">
        <a class="nav-link active" href="#home">Главная</a><a class="nav-link" href="#characters">Персонажи</a><a class="nav-link" href="#mood">Настроение</a><a class="nav-link" href="#about">О клубе</a>
      </nav>
      <div class="header-actions"><button class="favorites-button" id="favorites-button" aria-pressed="false">${icon('heart')}<span class="favorites-label">Избранное</span><span class="favorites-count">0</span></button><button class="menu-button icon-button" aria-label="Открыть меню" aria-expanded="false">${icon('menu')}</button></div>
    </div>
  </header>
  <main>
    <section class="hero container" id="home" aria-labelledby="hero-title">
      <div class="hero-copy">
        <div class="eyebrow"><span class="tiny-flower">✿</span> ТВОЁ МАЛЕНЬКОЕ СЧАСТЛИВОЕ МЕСТО</div>
        <h1 id="hero-title">Мир, в котором<br>расцветает<br><em>твоё сердце.</em><span class="heading-sparkle">✧</span></h1>
        <p class="hero-description">Немного аниме, щепотка волшебства и много нежности. Знакомься с героинями, с которыми каждый день становится теплее.</p>
        <div class="hero-buttons"><a class="button button-primary" href="#characters">Найти свою героиню ${icon('arrow')}</a><button class="surprise-button" id="surprise-button">${icon('sparkles')} Удиви меня</button></div>
        <div class="hero-footnote"><div class="avatar-stack">${characters.slice(0, 3).map(c => `<img src="${imageUrl(c.image)}" alt="" width="34" height="34">`).join('')}</div><span>Разные истории. <strong>Одно уютное место.</strong></span></div>
      </div>
      <div class="hero-art">
        <div class="art-topline"><span>木漏れ日 — свет сквозь листву</span><span>VOL. 01 / SPRING</span></div>
        <div class="hero-image-wrap"><img class="hero-image" src="${imageUrl('hero-anime.webp')}" alt="Подруги отдыхают на весеннем пикнике под цветущей сакурой" width="1586" height="992" fetchpriority="high"><div class="image-wash"></div></div>
        <div class="floating-note"><span class="note-sparkle">✧</span> здесь можно<br><em>просто быть собой</em><span class="note-heart">♡</span></div>
        <div class="hero-caption"><span class="status-dot"></span> маленькие моменты, большие чувства <span>♡</span></div>
        <svg class="sketch-star star-one" viewBox="0 0 60 60" aria-hidden="true"><path d="m30 3 6 21 21 6-21 6-6 21-6-21L3 30l21-6Z"/></svg>
        ${flower('art-flower')}
      </div>
    </section>
    <div class="ribbon" aria-hidden="true"><div class="ribbon-inner"><span>МАЛЕНЬКИЕ РАДОСТИ</span>✿<span>ТЁПЛЫЕ ИСТОРИИ</span>✧<span>БОЛЬШИЕ МЕЧТЫ</span>✿<span>БУДЬ СОБОЙ</span>✧<span>МАЛЕНЬКИЕ РАДОСТИ</span>✿<span>ТЁПЛЫЕ ИСТОРИИ</span>✧</div></div>
    <section class="characters-section container" id="characters" aria-labelledby="characters-title">
      <div class="section-heading"><div><div class="eyebrow">ЗНАКОМСТВО НАЧИНАЕТСЯ С УЛЫБКИ</div><h2 id="characters-title">У каждой — <em>своя магия.</em></h2></div><p>Кто-то обязательно окажется<br>близким твоему сердцу ♡</p></div>
      <div class="gallery-toolbar"><div class="filter-tabs" role="group" aria-label="Фильтр по настроению"><button class="filter-tab active" data-category="all" aria-pressed="true">Все героини <span>04</span></button><button class="filter-tab" data-category="tender" aria-pressed="false">Нежность</button><button class="filter-tab" data-category="cozy" aria-pressed="false">Уют</button><button class="filter-tab" data-category="dream" aria-pressed="false">Мечты</button><button class="filter-tab" data-category="adventure" aria-pressed="false">Приключения</button></div><label class="search-box">${icon('search')}<input id="character-search" type="search" placeholder="Найти героиню…" aria-label="Поиск героини" maxlength="80"></label></div>
      <div class="collection-notice" id="collection-notice" hidden><span>${icon('heart')} Твоя коллекция любимых героинь</span><button id="show-all">Показать всех ${icon('arrow')}</button></div>
      <div id="gallery" class="gallery"></div><p id="result-count" class="sr-only" role="status" aria-live="polite"></p>
      <div class="gallery-footer"><span>Четыре характера. Бесконечно много вдохновения.</span><span>Создано с теплом ${icon('heart')}</span></div>
    </section>
    <section class="mood-section container" id="mood" aria-labelledby="mood-title"><div class="mood-panel"><div class="mood-copy"><div class="eyebrow">ПРИСЛУШАЙСЯ К СЕБЕ</div><h2 id="mood-title">А что у тебя<br><em>на душе?</em></h2><p>Для каждого настроения<br>найдётся своя компания.</p><span class="mood-doodle">～ ♡</span></div><div class="mood-options"><button class="mood-card mood-cozy" data-mood="cozy"><span class="mood-illustration">${icon('cup')}</span><span class="mood-name">Хочется уюта</span><span class="mood-description">Плед, чай и никаких планов</span><span class="mood-link">Мне сюда ${icon('arrow')}</span></button><button class="mood-card mood-dream" data-mood="dream"><span class="mood-illustration">${icon('moon')}</span><span class="mood-name">Витаю в облаках</span><span class="mood-description">Помечтаем о чём-то красивом?</span><span class="mood-link">Мне сюда ${icon('arrow')}</span></button><button class="mood-card mood-adventure" data-mood="adventure"><span class="mood-illustration">${icon('sun')}</span><span class="mood-name">Готова к чудесам</span><span class="mood-description">Пусть день будет особенным</span><span class="mood-link">Мне сюда ${icon('arrow')}</span></button></div></div></section>
    <section class="about-section container" id="about" aria-labelledby="about-title"><div class="about-flower">${flower()}</div><div class="eyebrow">БОЛЬШЕ, ЧЕМ ПРОСТО ПЕРСОНАЖИ</div><h2 id="about-title">Маленький уголок <em>большого тепла.</em></h2><p>Komorebi — японское слово для солнечного света, пробивающегося сквозь листву.<br>Мы собираем такое же чувство: в историях, в красках, в простых радостях.<br>Завари любимый чай. Здесь тебе рады.</p><button class="wish-button" id="wish-button">${icon('sparkles')} Маленькое пожелание для тебя</button><p class="daily-wish" id="daily-wish" aria-live="polite">Пусть сегодня найдётся повод улыбнуться.</p></section>
  </main>
  <footer class="footer"><div class="container footer-inner"><a class="brand footer-brand" href="#home">${flower()}<span>komorebi</span></a><p>Сделано с нежностью и капелькой магии.</p><a href="#home">Наверх <span>↑</span></a></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} Komorebi Club</span><span>Оригинальные персонажи · маленькая творческая вселенная</span><span>またね · до встречи ♡</span></div></footer>
  <dialog class="character-dialog" aria-labelledby="dialog-title"><button class="dialog-close icon-button" aria-label="Закрыть историю">${icon('close')}</button><div id="dialog-content"></div></dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
`;

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2700);
}

function updateFavoriteControls() {
  document.querySelector('.favorites-count').textContent = favorites.size;
  document.querySelector('#favorites-button').setAttribute('aria-pressed', String(onlyFavorites));
  document.querySelector('#collection-notice').hidden = !onlyFavorites;
  document.querySelectorAll('[data-favorite]').forEach(button => {
    const character = characters.find(c => c.id === button.dataset.favorite);
    const selected = favorites.has(character.id);
    button.classList.toggle('is-favorite', selected);
    button.setAttribute('aria-pressed', String(selected));
    button.setAttribute('aria-label', `${selected ? 'Убрать из избранного' : 'Добавить в избранное'}: ${character.name}`);
    if (button.classList.contains('dialog-favorite')) button.innerHTML = `${icon('heart')} ${selected ? 'В твоём избранном' : 'Сохранить в сердечке'}`;
  });
}

function toggleFavorite(id) {
  const selected = favorites.has(id);
  selected ? favorites.delete(id) : favorites.add(id);
  let persisted = true;
  try { localStorage.setItem(storageKey, JSON.stringify([...favorites])); } catch { persisted = false; }
  const name = characters.find(c => c.id === id).name;
  showToast(persisted ? `${name} ${selected ? 'убрана из избранного' : 'теперь в твоём сердечке ♡'}` : 'Сохранено на эту сессию: хранилище браузера недоступно');
  if (onlyFavorites) renderGallery();
  updateFavoriteControls();
}

function renderGallery() {
  const visible = characters.filter(c => (category === 'all' || category === c.category) && (!onlyFavorites || favorites.has(c.id)) && `${c.name} ${c.japanese} ${c.subtitle} ${c.tag} ${c.likes.join(' ')}`.toLocaleLowerCase('ru').includes(query));
  const gallery = document.querySelector('#gallery');
  gallery.innerHTML = visible.length ? visible.map((c, index) => `
    <article class="character-card ${c.color}" style="--card-index:${index}">
      <div class="card-art"><button class="card-image-button" data-character="${c.id}" aria-label="Читать историю: ${c.name}"><img src="${imageUrl(c.image)}" alt="${c.name} — ${c.subtitle.toLowerCase()}" width="480" height="560" loading="lazy"></button><span class="character-tag">${icon(c.icon)} ${c.tag}</span><button class="favorite-toggle icon-button" data-favorite="${c.id}" aria-label="Добавить в избранное: ${c.name}" aria-pressed="false">${icon('heart')}</button><span class="card-art-caption">${c.japanese} / ${String(characters.indexOf(c) + 1).padStart(2, '0')}</span></div>
      <div class="card-info"><div class="card-title-row"><h3><button data-character="${c.id}">${c.name}</button></h3><span>${c.japanese}</span></div><p>${c.subtitle}</p><button class="story-link" data-character="${c.id}">Её маленькая история ${icon('arrow')}</button></div>
    </article>`).join('') : `<div class="empty-state">${icon(onlyFavorites ? 'heart' : 'search')}<h3>${onlyFavorites && favorites.size === 0 ? 'Здесь поселятся твои любимые' : 'Кажется, героиня немного потерялась'}</h3><p>${onlyFavorites && favorites.size === 0 ? 'Нажми на сердечко на карточке — и она останется с тобой.' : 'Попробуй другое имя или посмотри на всех героинь.'}</p><button class="button button-primary" id="reset-filters">Познакомиться со всеми ${icon('arrow')}</button></div>`;
  document.querySelector('#result-count').textContent = `Найдено героинь: ${visible.length}`;
  document.querySelectorAll('[data-category]').forEach(button => {
    const active = button.dataset.category === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  updateFavoriteControls();
}

function resetFilters() {
  category = 'all'; onlyFavorites = false; query = '';
  document.querySelector('#character-search').value = '';
  renderGallery();
}

function openCharacter(id, trigger) {
  activeCharacter = characters.find(c => c.id === id);
  if (!activeCharacter) return;
  dialogTrigger = trigger;
  const c = activeCharacter;
  document.querySelector('#dialog-content').innerHTML = `<div class="dialog-image ${c.color}"><img src="${imageUrl(c.image)}" alt="${c.name}" width="480" height="560"><span class="dialog-japanese">${c.japanese}</span></div><div class="dialog-story"><div class="eyebrow">${c.tag} · ${c.age} ${c.age === 21 ? 'год' : 'года'}</div><h2 id="dialog-title">${c.name} <span>${c.japanese}</span></h2><p class="dialog-subtitle">${c.hobby}</p><p class="dialog-description">${c.detail}</p><blockquote>${c.quote}</blockquote><div class="likes-label">ЕЁ МАЛЕНЬКИЕ РАДОСТИ</div><div class="character-likes">${c.likes.map(like => `<span>${like}</span>`).join('')}</div><button class="button button-primary dialog-favorite" data-favorite="${c.id}">${icon('heart')} Сохранить в сердечке</button></div>`;
  updateFavoriteControls();
  const dialog = document.querySelector('.character-dialog');
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

const dialog = document.querySelector('.character-dialog');
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (dialogTrigger?.isConnected) dialogTrigger.focus({ preventScroll: true });
  else document.querySelector('#favorites-button').focus({ preventScroll: true });
});
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

document.addEventListener('click', event => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) return toggleFavorite(favoriteButton.dataset.favorite);
  const characterButton = event.target.closest('[data-character]');
  if (characterButton) return openCharacter(characterButton.dataset.character, characterButton);
  const filterButton = event.target.closest('[data-category]');
  if (filterButton) { category = filterButton.dataset.category; renderGallery(); }
  const moodButton = event.target.closest('[data-mood]');
  if (moodButton) {
    resetFilters(); category = moodButton.dataset.mood; renderGallery();
    document.querySelector('#characters').scrollIntoView({ behavior: 'smooth' });
    document.querySelector(`[data-category="${category}"]`).focus({ preventScroll: true });
  }
  if (event.target.closest('#reset-filters, #show-all')) resetFilters();
});

document.querySelector('#character-search').addEventListener('input', event => { query = event.target.value.trim().toLocaleLowerCase('ru'); renderGallery(); });
document.querySelector('#favorites-button').addEventListener('click', () => {
  onlyFavorites = !onlyFavorites; category = 'all'; query = '';
  document.querySelector('#character-search').value = '';
  renderGallery();
  document.querySelector('#characters').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#surprise-button').addEventListener('click', event => {
  const others = characters.filter(c => c.id !== activeCharacter?.id);
  openCharacter(others[Math.floor(Math.random() * others.length)].id, event.currentTarget);
});

const wishes = ['Тебе не нужно спешить. Всё хорошее растёт в своём темпе.', 'Пусть сегодня кто-нибудь улыбнётся тебе просто так.', 'Ты заслуживаешь отдыха, тёплого чая и добрых слов.', 'В твоём обычном дне прячется маленькое чудо. Присмотрись.', 'Пусть на любимую песню, красивое небо и себя всегда будет время.', 'Быть собой — уже достаточно. Правда.'];
let lastWish = -1;
document.querySelector('#wish-button').addEventListener('click', () => {
  const available = wishes.map((_, i) => i).filter(i => i !== lastWish);
  lastWish = available[Math.floor(Math.random() * available.length)];
  document.querySelector('#daily-wish').textContent = wishes[lastWish];
});

const menuButton = document.querySelector('.menu-button');
function closeMenu() { document.querySelector('.nav').classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Открыть меню'); }
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Закрыть меню' : 'Открыть меню');
  document.querySelector('.nav').classList.toggle('open', expanded);
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  if (link.hash === '#characters') resetFilters();
}));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`)); });
}, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
renderGallery();
