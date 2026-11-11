export type StepInvolvement = {
  participantId: string
  /** Что роль обычно делает именно на этом этапе */
  does: string[]
}

export type ProcessStep = {
  id: string
  number: number
  title: string
  subtitle: string
  color: string
  colorSoft: string
  whatWeDo: string[]
  result: string[]
  involved: StepInvolvement[]
  /** Directly Responsible Individual — одна роль за выход этапа */
  driParticipantId: string
  /** Условия перехода дальше */
  exitCriteria: string[]
  /** Какие уровни инициатив обычно проходят этап: L1 / L2 / L3 */
  appliesToLevels: Array<"L1" | "L2" | "L3">
}

export type InitiativeLevel = {
  id: "L1" | "L2" | "L3"
  title: string
  subtitle: string
  when: string
  process: string[]
  note: string
}

export type Artifact = {
  id: string
  title: string
  description: string
  fromStepId: string
}

export type Participant = {
  id: string
  title: string
  responsibilities: string[]
}

export type Principle = {
  id: string
  title: string
  description: string
}

export const docsMeta = {
  title: "От идеи до измеримого результата в production",
  subtitle:
    "Product Development Lifecycle: после Intake — от гипотезы до релиза и impact. Глубина этапов зависит от уровня инициативы (L1–L3).",
  feedbackNote: "Обратная связь на каждом этапе · Discovery следующей инициативы может идти параллельно Delivery текущей",
  intakeNote:
    "Любая идея сначала проходит Intake (база компании): Reject / Park / Discovery. Эти 10 этапов — путь инициативы, уже допущенной в Discovery или Delivery.",
}

/** Три уровня сложности — чтобы не гонять мелкий баг через полный lifecycle */
export const initiativeLevels: InitiativeLevel[] = [
  {
    id: "L1",
    title: "L1 · Small Change",
    subtitle: "Lightweight",
    when: "Багфиксы, мелкий UI, техдолг без новой бизнес-логики",
    process: [
      "Краткое описание + acceptance",
      "Оценка",
      "Разработка и QA",
      "Релиз (без полного Discovery / Go-No-Go)",
    ],
    note: "Этапы 1–7 не обязательны. DRI обычно Tech Lead или разработчик зоны.",
  },
  {
    id: "L2",
    title: "L2 · Feature",
    subtitle: "Standard",
    when: "Новая функция внутри существующего продукта",
    process: [
      "Упрощённый Discovery (проблема → концепт, прототип по необходимости)",
      "Спека / Figma / backlog",
      "План и лёгкий Go",
      "Delivery + Impact",
    ],
    note: "Полный цикл возможен, но без тяжёлого gate и без 3 вариантов архитектуры «для галочки».",
  },
  {
    id: "L3",
    title: "L3 · Initiative",
    subtitle: "Full lifecycle",
    when: "Новые модули, биллинг, AI/модели, крупные интеграции, смена архитектуры",
    process: [
      "Intake → полный Discovery",
      "Прототип и валидация",
      "PRD/ТЗ + архитектура",
      "Formal Go/No-Go",
      "Delivery, ops readiness, Impact (Scale / Iterate / Pivot / Sunset)",
    ],
    note: "Кейс «Риск и убытки» в этом приложении — пример L3.",
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: "problem",
    number: 1,
    title: "Понимание проблемы и цели",
    subtitle: "Зачем это нужно и какую ценность принесёт",
    color: "bg-sky-600",
    colorSoft: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-900",
    whatWeDo: [
      "Анализируем бизнес-цель и метрики успеха",
      "Фиксируем текущий процесс и боли пользователей",
      "Формулируем гипотезу ценности",
      "По типу задачи собираем discovery-команду на исследование (не «всех подряд»)",
    ],
    // Один артефакт: формулировка проблемы — раздел внутри кейса, не отдельный документ
    result: ["Бизнес-кейс / гипотеза"],
    involved: [
      {
        participantId: "business",
        does: [
          "Формулирует потребность и боль клиентов",
          "Даёт коммерческий контекст и ожидания",
          "Предлагает черновые метрики успеха",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Уточняет проблему и ценность",
          "Собирает бизнес-кейс / гипотезу",
          "Определяет состав discovery по типу задачи",
          "Готовит переход к исследованию",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Проблема и гипотеза ценности зафиксированы без прыжка в детальное решение",
      "Метрики успеха черновые, но измеримые",
      "Discovery-сквад назван по типу задачи",
      "Intake-решение на Discovery уже есть (не сырое пожелание «сделайте»)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "research",
    number: 2,
    title: "Исследование и анализ",
    subtitle: "Собираем факты: пользователи, рынок, техника",
    color: "bg-emerald-600",
    colorSoft:
      "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-900",
    whatWeDo: [
      "Discovery-сквад (собранный на этапе 1) проводит исследование",
      "Интервью пользователей и разбор jobs-to-be-done",
      "Анализ конкурентов и рынка",
      "Аудит текущего продукта и технических ограничений",
      "Картируем точки касания с текущими процессами: биллинг, уведомления, отчёты, демо",
      "Аудит готовности данных: что нужно модели vs что есть / доработать / сделать заранее",
      "Синтез инсайтов, рисков и пробелов бизнес-запроса",
      "Фиксация high-level требований, prerequisite и смысла выхода модели для дизайна",
    ],
    // Два артефакта Big Tech: evidence (readout) и decision (HLR) — не смешиваем в один документ
    result: ["Исследовательский отчёт", "High-level требования"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Ведёт discovery и синтез инсайтов",
          "Фиксирует high-level требования",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Интервью и UX-исследования",
          "Карта сценариев и болей",
        ],
      },
      {
        participantId: "architect",
        does: [
          "Аудит текущих систем и интеграций",
          "Оценка технических ограничений",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Таблица готовности слоёв и входов модели",
          "Фиксирует gaps и prerequisite до MVP",
        ],
      },
      {
        participantId: "business",
        does: [
          "Даёт доступ к клиентам и экспертам",
          "Подтверждает приоритет сегментов",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Есть evidence-отчёт (факты) отдельно от high-level требований",
      "Поняты touchpoints с биллингом / notify / отчётами / данными",
      "Gaps и prerequisite названы до концепта",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "concept",
    number: 3,
    title: "Концепт и решение",
    subtitle: "Варианты решения и high-level архитектура",
    color: "bg-violet-600",
    colorSoft:
      "bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-900",
    whatWeDo: [
      "Генерируем 2–3 варианта решения с разным scope",
      "Рисуем as-is / to-be и стыковку фичи с процессами платформы (биллинг, уведомления, отчёты)",
      "Прорабатываем UX-концепт ключевых поверхностей и смысл выхода модели для дизайна",
      "Рисуем high-level архитектуру: компоненты, sequence, illustrative I/O (формальные API — в ТЗ)",
      "Фиксируем trade-offs, риски и выбранный вариант",
    ],
    // Product concept + architecture — два артефакта, как readout + HLR
    result: ["Концепт решения", "Архитектурная схема"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Сравнивает варианты по ценности и scope",
          "Фиксирует выбранный концепт",
        ],
      },
      {
        participantId: "designer",
        does: [
          "User flow и as-is / to-be схемы",
          "Схема стыковки фичи с биллингом, уведомлениями, отчётами",
          "UX-концепт ключевых поверхностей",
        ],
      },
      {
        participantId: "architect",
        does: [
          "High-level архитектура и интеграции",
          "Trade-offs платформы",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Контракт входов/выходов модели для UI и отчёта",
          "Методика убытка и версионирование",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Оценка реализуемости командой",
          "Риски поставки",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Выбран один вариант решения с явными trade-offs",
      "As-is/to-be и стыковка с платформенными процессами зафиксированы",
      "High-level архитектура достаточна для прототипа (не полный OpenAPI)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "prototype",
    number: 4,
    title: "Прототип и валидация",
    subtitle: "Быстро проверяем идею на пользователях и технике",
    color: "bg-cyan-600",
    colorSoft:
      "bg-cyan-50 text-cyan-800 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-200 dark:border-cyan-900",
    whatWeDo: [
      "Собираем кликабельный UI/UX-прототип ключевого сценария",
      "Готовим сценарии и критерии успеха валидации",
      "Проводим пользовательские тесты с целевыми сегментами",
      "Проверяем техническую реализуемость (спайк при необходимости)",
      "Фиксируем выводы: идём дальше, итерируем или меняем подход",
    ],
    // Два артефакта: сам прототип и readout валидации (не QA этапа 9)
    result: ["UI/UX-прототип", "Результаты валидации"],
    involved: [
      {
        participantId: "designer",
        does: [
          "Собирает UI/UX-прототип",
          "Проводит пользовательские тесты",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Критерии успеха валидации",
          "Решение: идём дальше / итерируем",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Спайк / проверка реализуемости",
          "Фидбек по техническим рискам",
        ],
      },
      {
        participantId: "business",
        does: [
          "Участвует в демо прототипа",
          "Даёт фидбек с стороны клиента",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Проверяет понятность метрик и цифр на прототипе",
          "Уточняет допущения данных для валидации",
        ],
      },
    ],
    driParticipantId: "designer",
    exitCriteria: [
      "Прототип критического пути проверен с пользователями или целевым сегментом",
      "Есть validation readout: идём / итерируем / стоп",
      "Техспайк закрыл ключевой риск реализуемости (если был)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "spec",
    number: 5,
    title: "Детальная проработка",
    subtitle: "Превращаем концепт в полное ТЗ и backlog",
    color: "bg-amber-500",
    colorSoft:
      "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-900",
    whatWeDo: [
      "Собираем полное ТЗ: истории, критерии приёмки, крайние случаи",
      "Фиксируем API endpoints, примеры request/response и схемы хранения",
      "Описываем права, биллинг/лимиты, уведомления и нефункциональные требования",
      "Финализируем макеты и передаём ссылку на дизайн",
      "Декомпозируем объём в backlog для планирования",
      "Рабочий review с ролями (align, не gate) — формальный Go/No-Go на этапе согласования",
    ],
    result: ["Полное ТЗ", "Figma handoff", "Backlog"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Истории и критерии приёмки",
          "Сборка ТЗ и backlog",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Финальные макеты и сценарии",
          "Ссылка на Figma и handoff",
        ],
      },
      {
        participantId: "architect",
        does: [
          "API, модели данных, крайние случаи",
          "Технические требования",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Спека входов/выходов данных и расчётов",
          "Критерии качества данных и метрик",
        ],
      },
      {
        participantId: "qa",
        does: [
          "Ввод по тест-сценариям",
          "Проверка критериев приёмки",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "ТЗ + Figma + backlog покрывают must MVP",
      "Acceptance criteria проверяемы",
      "Рабочий review ролей пройден (это ещё не formal Go)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "planning",
    number: 6,
    title: "Планирование и оценка",
    subtitle: "Engineering commitment: стоимость, зависимости, риски, MVP-срез",
    color: "bg-pink-600",
    colorSoft:
      "bg-pink-50 text-pink-800 border-pink-200 dark:bg-pink-950/40 dark:text-pink-200 dark:border-pink-900",
    whatWeDo: [
      "Оцениваем истории в story points и раскладываем по спринтам",
      "Строим план с зависимостями: что после чего и кто владеет",
      "Сверяем с платформой: что уже есть, что блокирует (биллинг, слои, уведомления)",
      "Фиксируем workaround для внешних блокеров, чтобы MVP не ждал всё подряд",
      "Считаем capacity, риски и критический путь до демо/пилота",
    ],
    result: ["План работ (Jira / Linear)", "Оценка и риски"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Приоритет и scope спринтов",
          "Решения по блокерам и workaround",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Декомпозиция, оценки, Gantt-зависимости",
          "Критический путь и технические риски",
        ],
      },
      {
        participantId: "developers",
        does: [
          "Оценка задач",
          "Уточнение scope и зависимостей кода",
        ],
      },
      {
        participantId: "qa",
        does: [
          "Оценка тест-нагрузки",
          "Ввод по рискам качества и регрессии",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Оценка data/prerequisite работ",
          "Статус слоёв и методики как блокеров плана",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Подтверждает готовность handoff к спринтам",
          "Буфер на правки состояний после оценки",
        ],
      },
    ],
    driParticipantId: "tech-lead",
    exitCriteria: [
      "Есть оценка, capacity, зависимости и критический путь",
      "Блокеры платформы и workaround названы",
      "Engineering commitment: что реально берём в MVP (не обещание даты бизнесу)",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
  {
    id: "approval",
    number: 7,
    title: "Согласование",
    subtitle: "Investment Go/No-Go: ценность, риски, ресурсы — не повтор оценки",
    color: "bg-teal-600",
    colorSoft:
      "bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/40 dark:text-teal-200 dark:border-teal-900",
    whatWeDo: [
      "Собираем пакет на gate: ТЗ, Figma, backlog, план, оценка и риски",
      "Ревью с архитектором, tech lead и дата-командой: модель → пайплайн → UI/backend",
      "Согласуем с бизнесом scope, ценность пилота и осознанные workaround (биллинг, PRE-2)",
      "Лёгкая проверка security / legal: данные пилота, дисклеймер методики €/га",
      "Фиксируем Go/No-Go, условия MVP, freeze версий и подписи в одном decision record",
    ],
    result: ["Финальное решение (Go + freeze)"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Ведёт gate и повестку",
          "Фиксирует решение, условия и open questions",
        ],
      },
      {
        participantId: "business",
        does: [
          "Утверждает scope и ценность пилота",
          "Принимает workaround (soft-limit, сезон без погоды)",
        ],
      },
      {
        participantId: "architect",
        does: [
          "Техническое ревью архитектуры и контрактов",
          "Подтверждает, что блокеры платформы учтены",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Подтверждение оценок, плана и capacity",
          "Готовность команды к Sprint 1 (модель)",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Подтверждает готовность модели/пайплайна к старту MD-*",
          "Дисклеймер методики убытка и статус PRE",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Есть Go / No-Go / Go with conditions",
      "Freeze пакета и подписи зафиксированы",
      "Investment decision: ценность, риски и ресурсы приемлемы",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "handoff",
    number: 8,
    title: "Передача в команду",
    subtitle: "Задачи в трекере и технический брифинг",
    color: "bg-blue-800",
    colorSoft:
      "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-900",
    whatWeDo: [
      "Публикуем freeze-пакет задач в Linear (draft → published)",
      "Проводим технический брифинг: ТЗ, Figma, контракты, DoD пилота",
      "Раздаём ownership и отвечаем на вопросы команды",
    ],
    result: ["Handoff brief (Linear + брифинг)"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Публикует задачи и контекст",
          "Отвечает на вопросы по ценности",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Технический брифинг",
          "Раздаёт ownership задач",
        ],
      },
      {
        participantId: "developers",
        does: [
          "Читает ТЗ и макеты",
          "Уточняет непонятные места",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Передаёт макеты и гайды",
          "Отвечает на UX-вопросы",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Передаёт спеки данных и методики",
          "Отвечает на вопросы по расчётам и метрикам",
        ],
      },
    ],
    driParticipantId: "tech-lead",
    exitCriteria: [
      "Задачи опубликованы в трекере с ownership",
      "Команда прошла брифинг и знает DoR / DoD",
      "Ссылки на freeze-пакет доступны",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
  {
    id: "development",
    number: 9,
    title: "Разработка и тестирование",
    subtitle: "Реализация, QA и operational readiness перед релизом",
    color: "bg-indigo-600",
    colorSoft:
      "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-200 dark:border-indigo-900",
    whatWeDo: [
      "Реализуем фичу по ТЗ и DoD",
      "Делаем code review и автотесты",
      "Проводим QA (инженерные тесты, не валидация прототипа) и правим баги",
      "Закрываем operational readiness: monitoring/alerts, feature flags, rollback, миграции, security light-check",
    ],
    result: ["QA-отчёт / готовность к релизу"],
    involved: [
      {
        participantId: "developers",
        does: [
          "Реализация по ТЗ",
          "Code review и автотесты",
        ],
      },
      {
        participantId: "qa",
        does: [
          "Тест-кейсы и проверка",
          "Баги и регрессии",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Ревью и качество",
          "Снятие блокеров",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Уточнение требований",
          "Приёмка по критериям",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Реализация data / model частей",
          "Проверка качества расчётов и метрик",
        ],
      },
    ],
    driParticipantId: "tech-lead",
    exitCriteria: [
      "Код по DoD, ревью и автотесты зелёные на критическом пути",
      "QA без P0 блокеров",
      "Operational readiness: monitoring/alerts, flags, rollback, миграции — проверены или явно N/A",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
  {
    id: "release",
    number: 10,
    title: "Релиз и аналитика",
    subtitle: "Deploy + Impact: не конец, а старт следующего цикла",
    color: "bg-green-700",
    colorSoft:
      "bg-green-50 text-green-800 border-green-200 dark:bg-green-950/40 dark:text-green-200 dark:border-green-900",
    whatWeDo: [
      "Деплоим и включаем фичу (пилот/rollout), smoke и мониторинг ошибок",
      "Сверяем метрики успеха из бизнес-кейса; owner метрик — PM (+ бизнес)",
      "Фиксируем Impact-решение: Scale / Iterate / Pivot / Sunset и next iteration",
    ],
    result: ["Отчёт по релизу и метрикам"],
    involved: [
      {
        participantId: "devops",
        does: [
          "Деплой и инфраструктура",
          "Мониторинг и алерты",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Следит за метриками успеха",
          "Собирает фидбек и next steps",
        ],
      },
      {
        participantId: "developers",
        does: [
          "Поддержка релиза",
          "Хотфиксы при необходимости",
        ],
      },
      {
        participantId: "business",
        does: [
          "Оценивает бизнес-эффект",
          "Даёт фидбек с рынка",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Фича в целевом контуре (пилот/prod) с мониторингом",
      "Метрики из бизнес-кейса измерены или в сборе; owner метрик назван",
      "Решение Impact: Scale / Iterate / Pivot / Sunset зафиксировано",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
]

export const artifacts: Artifact[] = [
  {
    id: "business-case",
    title: "Бизнес-кейс и цели",
    description: "Гипотеза ценности, метрики успеха и формулировка проблемы.",
    fromStepId: "problem",
  },
  {
    id: "research-report",
    title: "Исследовательский отчёт",
    description:
      "Discovery readout: пользователи, конкуренты, аудит продукта и техники, инсайты.",
    fromStepId: "research",
  },
  {
    id: "hlr",
    title: "High-level требования",
    description:
      "Что берём в концепт: обязательные потребности, границы, открытые вопросы.",
    fromStepId: "research",
  },
  {
    id: "solution-concept",
    title: "Концепт решения",
    description:
      "Выбранный вариант продукта: UX-сценарий, scope и trade-offs.",
    fromStepId: "concept",
  },
  {
    id: "architecture",
    title: "Архитектурная схема",
    description:
      "High-level компоненты, sequence и illustrative I/O; формальные API — в полном ТЗ.",
    fromStepId: "concept",
  },
  {
    id: "ui-prototype",
    title: "UI/UX-прототип",
    description: "Кликабельный прототип ключевого сценария и поверхности экранов.",
    fromStepId: "prototype",
  },
  {
    id: "validation-results",
    title: "Результаты валидации",
    description:
      "Validation readout: пользователи и техспайк до полного ТЗ (не QA).",
    fromStepId: "prototype",
  },
  {
    id: "full-spec",
    title: "Полное ТЗ",
    description:
      "Спецификация: истории, критерии приёмки, API, данные, крайние случаи.",
    fromStepId: "spec",
  },
  {
    id: "figma-handoff",
    title: "Figma handoff",
    description: "Финальные макеты и дизайн-handoff для разработки.",
    fromStepId: "spec",
  },
  {
    id: "backlog",
    title: "Backlog",
    description: "Эпик и истории, готовые к оценке и планированию.",
    fromStepId: "spec",
  },
  {
    id: "work-plan",
    title: "План работ (Jira / Linear)",
    description:
      "Расписание с зависимостями, владельцами и выдержкой из платформенного плана.",
    fromStepId: "planning",
  },
  {
    id: "estimate-risks",
    title: "Оценка и риски",
    description:
      "Story points, capacity, критический путь, блокеры и workaround.",
    fromStepId: "planning",
  },
  {
    id: "final-decision",
    title: "Финальное решение (Go + freeze)",
    description:
      "Go/No-Go, условия MVP, freeze версий документов и матрица подписей.",
    fromStepId: "approval",
  },
  {
    id: "handoff-brief",
    title: "Handoff brief",
    description: "Опубликованные задачи в Linear, ссылки на freeze-пакет и техбрифинг.",
    fromStepId: "handoff",
  },
  {
    id: "qa-report",
    title: "QA-отчёт",
    description: "Покрытие тестами, блокеры и готовность к релизу.",
    fromStepId: "development",
  },
  {
    id: "release-report",
    title: "Отчёт по релизу",
    description: "Деплой, метрики пилота и план следующей итерации.",
    fromStepId: "release",
  },
]

export const participants: Participant[] = [
  {
    id: "pm",
    title: "Product Manager",
    responsibilities: [
      "Видение продукта",
      "Приоритизация",
      "Связь с бизнесом",
      "Метрики успеха",
    ],
  },
  {
    id: "designer",
    title: "UX/UI Designer",
    responsibilities: [
      "Исследования",
      "Прототипы и макеты",
      "Дизайн-система",
      "Пользовательские сценарии",
    ],
  },
  {
    id: "architect",
    title: "Архитектор",
    responsibilities: [
      "Архитектура",
      "Технические решения",
      "Качество системы",
      "Trade-offs и риски",
    ],
  },
  {
    id: "data-analysts",
    title: "Data Analysts / Models",
    responsibilities: [
      "Модели и методики расчёта",
      "Качество данных и слоёв",
      "Валидация результатов",
      "Документация допущений",
    ],
  },
  {
    id: "tech-lead",
    title: "Tech Lead / Team Lead",
    responsibilities: [
      "Оценка задач",
      "Координация команды",
      "Code review",
      "Технический брифинг",
    ],
  },
  {
    id: "developers",
    title: "Разработчики",
    responsibilities: [
      "Реализация",
      "Code review",
      "Тесты",
      "Документация кода",
    ],
  },
  {
    id: "qa",
    title: "QA / Тестировщик",
    responsibilities: [
      "Тест-кейсы",
      "Проверка качества",
      "Баги и регрессии",
      "Критерии приёмки",
    ],
  },
  {
    id: "devops",
    title: "DevOps / SRE",
    responsibilities: [
      "Деплой",
      "Инфраструктура",
      "Мониторинг",
      "CI/CD и надёжность",
    ],
  },
  {
    id: "business",
    title: "Бизнес / Stakeholders",
    responsibilities: [
      "Утверждение",
      "Приоритизация",
      "Метрики и KPI",
      "Обратная связь",
    ],
  },
]

export const principles: Principle[] = [
  {
    id: "user",
    title: "Ориентация на пользователя",
    description: "Реальные проблемы и реальные метрики, а не «хотелки».",
  },
  {
    id: "data",
    title: "Данные и аналитика",
    description: "Решения опираются на факты, исследования и цифры.",
  },
  {
    id: "transparency",
    title: "Прозрачность и коммуникация",
    description: "Все видят контекст, статус и причины решений.",
  },
  {
    id: "iteration",
    title: "Итеративность",
    description: "Быстрые проверки, MVP и постоянные улучшения.",
  },
  {
    id: "quality",
    title: "Качество",
    description: "Тесты, ревью, безопасность и понятный Definition of Done.",
  },
  {
    id: "automation",
    title: "Автоматизация",
    description: "CI/CD, мониторинг и DevOps как часть процесса.",
  },
  {
    id: "priority",
    title: "Честные приоритеты",
    description: "Выше ценность — выше в backlog. Фокус на важном.",
  },
]

export function getStepById(id: string) {
  return processSteps.find((step) => step.id === id)
}

export function getParticipantById(id: string) {
  return participants.find((participant) => participant.id === id)
}

export function getStepNeighbors(id: string) {
  const index = processSteps.findIndex((step) => step.id === id)
  if (index === -1) return { prev: undefined, next: undefined }
  return {
    prev: processSteps[index - 1],
    next: processSteps[index + 1],
  }
}
