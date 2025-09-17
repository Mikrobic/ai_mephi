---
layout: page
permalink: /career/
---

## Календарь мероприятий

<div class="calendar-wrapper">
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

<style>
.calendar-wrapper {
  width: 100%;
  max-width: 1200px; /* Максимальная ширина для десктопа */
  margin: 2rem auto;
  display: block;
}

.calendar-container {
  position: relative;
  width: 100%;
  padding-bottom: 60%; /* Оптимальное соотношение для недельного календаря */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

/* Десктоп - календарь полностью помещается */
@media (min-width: 1025px) {
  .calendar-container {
    padding-bottom: 55%; /* Еще менее вертикальный для больших экранов */
  }
}

/* Планшет */
@media (max-width: 1024px) and (min-width: 769px) {
  .calendar-container {
    padding-bottom: 70%; /* Более вертикальный для планшетов */
  }
}

/* Мобильная адаптация - БОЛЕЕ вертикальный */
@media (max-width: 768px) {
  .calendar-wrapper {
    margin: 1.5rem auto;
  }
  
  .calendar-container {
    padding-bottom: 100%; /* Квадратное соотношение */
    border-radius: 12px;
  }
}

@media (max-width: 480px) {
  .calendar-container {
    padding-bottom: 130%; /* Вертикальный */
  }
}

@media (max-width: 320px) {
  .calendar-container {
    padding-bottom: 150%; /* Очень вертикальный */
  }
}

/* Скрываем скролл на десктопе */
@media (min-width: 1025px) {
  .calendar-scroll-container {
    overflow-x: visible !important;
  }
}
</style>