export interface EnvironmentConfig {
  name: string
  url: string
  token?: string
  addedAt: string
}

export interface ProjectPaths {
  snippets?: string
  styles?: string
}

export interface ProjectConfig {
  name: string
  currentEnv: string | null
  environments: Record<string, EnvironmentConfig>
  paths?: ProjectPaths
  addedAt: string
}

export interface LoopressConfig {
  currentProject: string | null
  projects: Record<string, ProjectConfig>
}
