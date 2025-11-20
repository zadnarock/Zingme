export interface ExperienceIdea {
  title: string;
  description: string;
  vibe: string;
  twist: string; // The "AmazeMe" magical layer
}

export enum ViewState {
  IDLE,
  THINKING,
  RESULTS,
  ERROR
}

export interface WaitlistFormInputs {
  email: string;
  interest: 'beta' | 'investor' | 'partner';
}
