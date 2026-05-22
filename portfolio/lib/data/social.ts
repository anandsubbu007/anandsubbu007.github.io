export interface SocialLink {
  name: string
  url: string
  icon: string // lucide icon name
  username: string
  color: string
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/anandsubbu007", icon: "Github", username: "anandsubbu007", color: "#f1f5f9" },
  { name: "GitHub (Org)", url: "https://github.com/Subbu-App-Tech", icon: "Github", username: "Subbu-App-Tech", color: "#f1f5f9" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anand-subbu", icon: "Linkedin", username: "anand-subbu", color: "#0a66c2" },
  { name: "Twitter", url: "https://twitter.com/AL_Anandsubbu", icon: "Twitter", username: "@AL_Anandsubbu", color: "#1da1f2" },
  { name: "StackOverflow", url: "https://stackoverflow.com/users/12379401/anand-a-l", icon: "Code2", username: "anand-a-l", color: "#f48024" },
  { name: "Kaggle", url: "https://kaggle.com/anandsubbu007", icon: "BarChart2", username: "anandsubbu007", color: "#20beff" },
  { name: "Medium", url: "https://medium.com/@anandsubbu7", icon: "BookOpen", username: "@anandsubbu7", color: "#00ab6c" },
  { name: "LeetCode", url: "https://leetcode.com/Anandsubbu", icon: "Cpu", username: "Anandsubbu", color: "#ffa116" },
]
