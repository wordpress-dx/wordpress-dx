export interface EnvironmentConfig {
  addedAt: string
  name: string
  token?: string
  url: string
}

export interface ProjectConfig {
  addedAt: string
  currentEnv: null | string
  environments: Record<string, EnvironmentConfig>
  name: string
}

export interface LoopressConfig {
  currentProject: null | string
  projects: Record<string, ProjectConfig>
}
