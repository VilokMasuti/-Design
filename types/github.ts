export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  description: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface SearchResponse {
  total_count: number;
  items: Repository[];
}
