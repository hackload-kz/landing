import type { PrincipleType, TeamMember, Partner, CriterionType } from '../types';

export const principles: PrincipleType[] = [
  {
    title: "Открытый код",
    description: "Все проекты публикуются на GitHub с полной прозрачностью",
    icon: "Code"
  },
  {
    title: "Обучение",
    description: "Фокус на развитии навыков и получении знаний",
    icon: "BookOpen"
  },
  {
    title: "Сотрудничество",
    description: "Синхронизация команд и обмен знаниями",
    icon: "Users"
  },
  {
    title: "Реальные решения",
    description: "Решение актуальных отраслевых задач",
    icon: "Sparkles"
  }
];

export const teamMembers: TeamMember[] = [];

export const partnerCompanies: Partner[] = [
  {
    name: "PS Cloud Services",
    logo: "/ps-cloud-services-logo.svg",
    link: "https://ps.kz",
    type: "technical",
    description: {
      ru: "PS Cloud Services (PS.KZ), независимый казахстанский облачный провайдер",
      kk: "PS Cloud Services (PS.KZ), тәуелсіз қазақстандық бұлттық провайдер"
    }
  },
  {
    name: "Core 24/7",
    logo: "/Logo_core_text.svg",
    link: "https://core247.kz/",
    type: "informational",
    description: {
      ru: "DevOps as a Service для стартапов, бизнеса и госсектора",
      kk: "Стартаптар, бизнес және мемлекеттік сектор үшін DevOps қызмет ретінде"
    }
  },
  {
    name: "Freedom Holding",
    logo: "/freedom-white.svg",
    link: "https://bankffin.kz/",
    type: "Финансовый споносор",
    description: {
      ru: "Финансовый спонсор хакатона",
      kk: "Хакатонның қаржылық демеушісі"
    }
  }
];


export const evaluationCriteria: CriterionType[] = [];

export const organizerQuotes = [
  {
    quote: "HackLoad бросает вызов командам создать то, с чем не справляются типовые системы - обработку массивных всплесков трафика.",
    author: "Команда HackLoad"
  },
  {
    quote: "Мы моделируем реальные сценарии, которые неоднократно приводили к сбоям крупных билетных платформ в Казахстане.",
    author: "Технический комитет HackLoad"
  }
];