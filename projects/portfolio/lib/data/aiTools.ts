export interface AITool {
  id: string
  name: string
  description: string
  useCases: string[]
  icon: string // lucide icon name
  color: string
  logoPlaceholder: string // display initials
}

export const aiTools: AITool[] = [
  {
    id: "claude",
    name: "Claude (Anthropic)",
    description: "Primary AI assistant for complex architecture decisions and code review",
    useCases: [
      "Architecture exploration",
      "Code review & refactoring",
      "Documentation generation",
      "Complex problem solving",
    ],
    icon: "Bot",
    color: "#d97706",
    logoPlaceholder: "CL",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "In-editor AI pair programmer for real-time code suggestions",
    useCases: [
      "Real-time code completion",
      "Context-aware suggestions",
      "Test generation",
      "IDE integration",
    ],
    icon: "Code2",
    color: "#3b82f6",
    logoPlaceholder: "GC",
  },
  {
    id: "chatgpt",
    name: "ChatGPT (OpenAI)",
    description: "Rapid ideation, brainstorming, and technical research assistant",
    useCases: [
      "Rapid prototyping ideas",
      "Technical research",
      "API exploration",
      "Quick answers",
    ],
    icon: "MessageSquare",
    color: "#10b981",
    logoPlaceholder: "GP",
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor for context-aware multi-file edits",
    useCases: [
      "Multi-file refactoring",
      "Codebase-aware edits",
      "Code generation",
      "Debugging assistance",
    ],
    icon: "Cursor",
    color: "#8b5cf6",
    logoPlaceholder: "CR",
  },
  {
    id: "ollama",
    name: "Ollama",
    description: "Local LLM runner for privacy-conscious AI workflows",
    useCases: [
      "Private code analysis",
      "Offline AI assistance",
      "Local model inference",
      "Custom fine-tuning exploration",
    ],
    icon: "Server",
    color: "#6366f1",
    logoPlaceholder: "OL",
  },
  {
    id: "agentic",
    name: "Agentic Workflows",
    description: "Automated AI-driven workflows for productivity and engineering tasks",
    useCases: [
      "Automated documentation",
      "PR review automation",
      "Architecture validation",
      "Context-aware tooling",
    ],
    icon: "Workflow",
    color: "#ec4899",
    logoPlaceholder: "AW",
  },
]
