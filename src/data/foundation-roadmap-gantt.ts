import type { ILink, ITask } from "@svar-ui/react-gantt"

import type { GanttTaskMeta } from "@/components/diagrams/plan-gantt"

export type FoundationRoadmapGantt = {
  start: Date
  end: Date
  tasks: ITask[]
  links: ILink[]
  metaById: Record<number, GanttTaskMeta>
}

/** Initiative-level SaaS roadmap for the forest monitoring platform */
export const foundationRoadmapGantt: FoundationRoadmapGantt = {
  start: new Date(2026, 3, 1),
  end: new Date(2026, 8, 30),
  tasks: [
    {
      id: 10,
      text: "Платформа и доступы",
      type: "summary",
      start: new Date(2026, 3, 1),
      end: new Date(2026, 4, 15),
      progress: 40,
      open: true,
    },
    {
      id: 11,
      text: "Auth · tenants · роли",
      type: "task",
      parent: 10,
      start: new Date(2026, 3, 1),
      end: new Date(2026, 3, 30),
      progress: 55,
    },
    {
      id: 12,
      text: "Биллинг: лимиты / кредиты (MVP)",
      type: "task",
      parent: 10,
      start: new Date(2026, 3, 20),
      end: new Date(2026, 4, 15),
      progress: 20,
    },

    {
      id: 20,
      text: "Домен и данные",
      type: "summary",
      start: new Date(2026, 4, 1),
      end: new Date(2026, 5, 20),
      progress: 25,
      open: true,
    },
    {
      id: 21,
      text: "Зоны / участки леса",
      type: "task",
      parent: 20,
      start: new Date(2026, 4, 1),
      end: new Date(2026, 4, 30),
      progress: 35,
    },
    {
      id: 22,
      text: "Слои и каталог данных",
      type: "task",
      parent: 20,
      start: new Date(2026, 4, 15),
      end: new Date(2026, 5, 20),
      progress: 15,
    },

    {
      id: 30,
      text: "Мониторинг (core)",
      type: "summary",
      start: new Date(2026, 5, 1),
      end: new Date(2026, 6, 31),
      progress: 10,
      open: true,
    },
    {
      id: 31,
      text: "Ingest спутника + пайплайн",
      type: "task",
      parent: 30,
      start: new Date(2026, 5, 1),
      end: new Date(2026, 6, 10),
      progress: 10,
    },
    {
      id: 32,
      text: "Модель риска возгорания",
      type: "task",
      parent: 30,
      start: new Date(2026, 5, 15),
      end: new Date(2026, 6, 31),
      progress: 5,
    },

    {
      id: 40,
      text: "Продуктовое приложение",
      type: "summary",
      start: new Date(2026, 6, 1),
      end: new Date(2026, 7, 31),
      progress: 0,
      open: true,
    },
    {
      id: 41,
      text: "Карта · сценарий · отчёт",
      type: "task",
      parent: 40,
      start: new Date(2026, 6, 1),
      end: new Date(2026, 7, 20),
      progress: 0,
    },
    {
      id: 42,
      text: "Пилот / go-live",
      type: "task",
      parent: 40,
      start: new Date(2026, 7, 15),
      end: new Date(2026, 7, 31),
      progress: 0,
    },
  ],
  links: [
    { id: 1, source: 11, target: 12, type: "e2s" },
    { id: 2, source: 11, target: 21, type: "e2s" },
    { id: 3, source: 21, target: 22, type: "e2s" },
    { id: 4, source: 22, target: 31, type: "e2s" },
    { id: 5, source: 31, target: 32, type: "e2s" },
    { id: 6, source: 21, target: 41, type: "e2s" },
    { id: 7, source: 32, target: 41, type: "e2s" },
    { id: 8, source: 12, target: 41, type: "e2s" },
    { id: 9, source: 41, target: 42, type: "e2s" },
  ],
  metaById: {
    10: {
      department: "Platform",
      role: "Инициатива",
      owner: "Tech lead",
      impact: "Блокер для всего SaaS",
    },
    11: {
      department: "Platform",
      role: "Backend",
      owner: "Platform",
      impact: "Старт доменов и UI",
    },
    12: {
      department: "Platform",
      role: "Backend",
      owner: "Billing",
      impact: "Лимиты сценариев",
    },
    20: {
      department: "Data / Product",
      role: "Инициатива",
      owner: "Data lead",
      impact: "Сущности до мониторинга",
    },
    21: {
      department: "Product",
      role: "Fullstack",
      owner: "Product eng",
      impact: "Нужно для карты",
    },
    22: {
      department: "Data",
      role: "Data eng",
      owner: "Data",
      impact: "Вход для пайплайна",
    },
    30: {
      department: "Data / ML",
      role: "Инициатива",
      owner: "ML lead",
      impact: "Core value SaaS",
    },
    31: {
      department: "Data",
      role: "Data eng",
      owner: "Data",
      impact: "Блокер модели",
    },
    32: {
      department: "ML",
      role: "ML eng",
      owner: "ML",
      impact: "Блокер сценария",
    },
    40: {
      department: "Product",
      role: "Инициатива",
      owner: "PM",
      impact: "Поставка ценности",
    },
    41: {
      department: "Product",
      role: "Fullstack",
      owner: "App team",
      impact: "Пилот клиенту",
    },
    42: {
      department: "Product",
      role: "PM + eng",
      owner: "PM",
      impact: "Релиз горизонта",
    },
  },
}
