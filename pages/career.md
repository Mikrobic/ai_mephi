---
layout: page
permalink: /career/
---

## Календарь мероприятий

<div class="calendar-wrapper">
  <div class="calendar-scroll-container">
    <div class="calendar-container">
      <iframe 
        src="https://calendar.yandex.ru/embed/week?layer_ids=34640123&layer_names=Онлайн-магистратура&tz_id=Europe%2FMoscow&uid=2246487652" 
        class="yandex-calendar"
        frameborder="0"
        scrolling="no"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
  </div>
  <div class="scroll-hint">← Листайте в стороны →</div>
</div>

<style>
.calendar-wrapper {
  width: 100%;
  max-width: 1400px; /* Максимальная ширина для десктопа */
  margin: 2rem auto;
  display: block;
}

.calendar-scroll-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #6a9fb5 transparent;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Скрываем скроллбар на десктопе, если контент помещается */
@media (min-width: 1400px) {
  .calendar-scroll-container {
    overflow-x: hidden;
  }
}

.calendar-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.calendar-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.calendar-scroll-container::-webkit-scrollbar-thumb {
  background: #6a9fb5;
  border-radius: 4px;
}

/* Десктоп - адаптивная ширина */
.calendar-container {
  position: relative;
  width: 1200px; /* Ширина для комфортного отображения недели */
  min-width: 100%; /* Автоматически подстраивается под контейнер */
  padding-bottom: 65%; /* Менее вертикальный */
  height: 0;
}

.yandex-calendar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

.scroll-hint {
  text-align: center;
  color: #6a9fb5;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  display: none;
}

/* Большие экраны - календарь полностью помещается */
@media (min-width: 1400px) {
  .calendar-container {
    width: 100%; /* Занимает всю ширину контейнера */
    min-width: 100%;
    padding-bottom: 60%;
  }
  
  .scroll-hint {
    display: none !important;
  }
}

/* Средние экраны */
@media (max-width: 1399px) and (min-width: 1025px) {
  .calendar-container {
    width: 1100px;
    min-width: 1100px;
    padding-bottom: 70%;
  }
}

/* Планшеты */
@media (max-width: 1024px) and (min-width: 769px) {
  .calendar-container {
    width: 900px;
    min-width: 900px;
    padding-bottom: 80%;
  }
}

/* Мобильная адаптация - БОЛЕЕ вертикальный */
@media (max-width: 768px) {
  .calendar-container {
    width: 600px;
    min-width: 600px;
    padding-bottom: 130%;
  }
  
  .scroll-hint {
    display: block;
  }
}

@media (max-width: 480px) {
  .calendar-container {
    width: 500px;
    min-width: 500px;
    padding-bottom: 160%;
  }
}

@media (max-width: 320px) {
  .calendar-container {
    width: 450px;
    min-width: 450px;
    padding-bottom: 180%;
  }
}
</style>

<script>
// Показываем подсказку только когда нужен скролл
function checkScroll() {
  const scroll