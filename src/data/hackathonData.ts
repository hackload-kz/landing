import type { PrincipleType, TeamMember, Partner, CriterionType } from '../types';
import { Code, BookOpen, Users, Sparkles } from 'lucide-react';

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

export const partnerCompanies: Partner[] = [];

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