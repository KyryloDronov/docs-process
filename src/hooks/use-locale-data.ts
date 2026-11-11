import { useMemo } from "react"
import { useTranslation } from "react-i18next"

import {
  getArtifactTemplatesData,
  getBpmnData,
  getCaseStudyData,
  getFoundationData,
  getKnowledgeData,
  getProcessData,
} from "@/i18n/locale-data"
import { resolveAppLanguage } from "@/i18n"

export function useAppLanguage() {
  const { i18n } = useTranslation()
  return resolveAppLanguage(i18n.language)
}

export function useProcessData() {
  const lng = useAppLanguage()
  return useMemo(() => getProcessData(lng), [lng])
}

export function useKnowledgeData() {
  const lng = useAppLanguage()
  return useMemo(() => getKnowledgeData(lng), [lng])
}

export function useCaseStudyData() {
  const lng = useAppLanguage()
  return useMemo(() => getCaseStudyData(lng), [lng])
}

export function useArtifactTemplatesData() {
  const lng = useAppLanguage()
  return useMemo(() => getArtifactTemplatesData(lng), [lng])
}

export function useFoundationData() {
  const lng = useAppLanguage()
  return useMemo(() => getFoundationData(lng), [lng])
}

export function useBpmnData() {
  const lng = useAppLanguage()
  return useMemo(() => getBpmnData(lng), [lng])
}
