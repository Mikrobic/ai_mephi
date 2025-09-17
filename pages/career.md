---
layout: page
permalink: /career/
title: Карьерный трек
---

## Календарь мероприятий

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

<style>
.calendar-container {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* Соотношение сторон 4:3 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
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

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .calendar-container {
    padding-bottom: 100%; /* Квадратное соотношение для мобильных */
    margin: 1rem 0;
    border-radius: 12px;
  }
  
  .yandex-calendar {
    border-radius: 12px;
  }
}

@media (max-width: 480px) {
  .calendar-container {
    padding-bottom: 120%; /* Более высокий контейнер для маленьких экранов */
  }
  
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
}

/* Для очень маленьких экранов */
@media (max-width: 320px) {
  .calendar-container {
    padding-bottom: 140%;
  }
}
</style>