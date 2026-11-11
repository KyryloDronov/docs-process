import * as artifactTemplatesEn from "@/data/artifact-templates.en"
import * as artifactTemplatesRu from "@/data/artifact-templates"
import * as bpmnEn from "@/data/bpmn-task-process.en"
import * as bpmnRu from "@/data/bpmn-task-process"
import * as caseStudyEn from "@/data/case-study.en"
import * as caseStudyRu from "@/data/case-study"
import * as foundationEn from "@/data/foundation.en"
import * as foundationRu from "@/data/foundation"
import * as knowledgeEn from "@/data/knowledge-map.en"
import * as knowledgeRu from "@/data/knowledge-map"
import * as processEn from "@/data/process.en"
import * as processRu from "@/data/process"
import { resolveAppLanguage, type AppLanguage } from "@/i18n"

export function getProcessData(lng?: string) {
  return resolveAppLanguage(lng) === "en" ? processEn : processRu
}

export function getKnowledgeData(lng?: string) {
  return resolveAppLanguage(lng) === "en" ? knowledgeEn : knowledgeRu
}

export function getCaseStudyData(lng?: string) {
  return resolveAppLanguage(lng) === "en" ? caseStudyEn : caseStudyRu
}

export function getFoundationData(lng?: string) {
  return resolveAppLanguage(lng) === "en" ? foundationEn : foundationRu
}

export function getArtifactTemplatesData(lng?: string) {
  return resolveAppLanguage(lng) === "en"
    ? artifactTemplatesEn
    : artifactTemplatesRu
}

export function getBpmnData(lng?: string) {
  return resolveAppLanguage(lng) === "en" ? bpmnEn : bpmnRu
}

export type ArtifactTemplatesBundle = typeof artifactTemplatesRu
export type CaseStudyBundle = typeof caseStudyRu
export type ProcessBundle = typeof processRu
export type KnowledgeBundle = typeof knowledgeRu
export type FoundationBundle = typeof foundationRu
export type BpmnBundle = typeof bpmnRu

export function isAppLanguage(value: string): value is AppLanguage {
  return value === "ru" || value === "en"
}
