export interface University {
  country?: string;
  alpha_two_code?: string;
  state_province?: string | null;
  name?: string;
  web_pages?: string[];
  domains?: string[];
}

export interface UseUniversityDataResult {
  data?: University[];
  isLoading?: boolean;
  isError?: boolean;
  progress?: number;
}